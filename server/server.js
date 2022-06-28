const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const path = require("path");

const cors = require("cors");
const bodyParser = require("body-parser");

const mariadb = require("mariadb");

const bcrypt = require("bcrypt");
const saltRounds = 10;
const upload = require("express-fileupload");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(upload());
app.use(express.static("./public"));
const seller = require("./queries/seller.js");
const customer = require("./queries/customer.js");
const admin = require("./queries/admin.js");
const productQuery = require("./queries/productQuery.js");
app.use(seller);
app.use(customer);
app.use(admin);
app.use(productQuery);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3001, () => {
  console.log("Server is running");
});

const PORT = process.env.PORT || 8080;

let usersConnected = new Map();

io.on("connection", (socket) => {
  let { id } = socket.client;

  socket.on("user nickname", (nickname) => {
    usersConnected.set(nickname, [socket.client.id, socket.id]);

    //  2) Send list with connected sockets
    io.emit("users-on", Array.from(usersConnected.keys()));

    //  3) Send to all other users the 'nickname' of the new socket connected
    socket.broadcast.emit("welcome", nickname);
  });

  socket.on("chat message", ({ nickname, msg }) => {
    socket.broadcast.emit("chat message", { nickname, msg });
  });

  socket.on("chat message private", ({ toUser, nickname, msg }) => {
    let socketId = usersConnected.get(toUser)[1];
    io.to(socketId).emit("private msg", { id, nickname, msg });
  });

  socket.on("disconnect", () => {
    let tempUserNickname;

    for (let key of usersConnected.keys()) {
      if (usersConnected.get(key)[0] === id) {
        tempUserNickname = key;
        usersConnected.delete(key);
        break;
      }
    }
    // Send to client the updated list with users connected
    io.emit("users-on", Array.from(usersConnected.keys()));

    // Send to cliente the nickname of the user that was disconnected
    socket.broadcast.emit("user-disconnected", tempUserNickname);
  });
});

server.listen(PORT, () => console.log(`Listen on *: ${PORT}`));
