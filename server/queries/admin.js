const express = require("express");
const admin = express.Router();
const mariadb = require("mariadb");

admin.post("/loginAdmin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    if (password == "dytracker") {
      const result = await db.query("SELECT * FROM admin WHERE email = ? ", [
        email,
      ]);
      if (result.length > 0) {
        res.send({ msg: "user logged" });
      } else {
        res.send({ msg: "Not a registered admin" });
      }
    } else {
      res.send({ msg: "Wrong combination" });
    }
  } catch (err) {
    throw err;
  }
});

//Add admin//
admin.post("/addAdmin", async (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const contactno = req.body.contactno;
  const email = req.body.email;

  try {
    const result = await db.query("SELECT * FROM admin WHERE email = ?", [
      email,
    ]);

    if (result.length == 0) {
      db.query(
        "INSERT INTO admin (fname,lname,contactno,email) VALUES(?,?,?,?)",
        [fname, lname, contactno, email]
      );

      res.send({ msg: "Admin added successfully" });
    } else {
      res.send({ msg: "Already an admin" });
    }
  } catch (err) {
    throw err;
  }
});

//View Users//
admin.get("/users/:type", async (req, res) => {
  const type = req.params.type;
  try {
    const result = await db.query("SELECT * FROM " + type);

    res.send(result);
  } catch (err) {
    throw err;
  }
});

// Delete User //

admin.delete("/del_user/:type/:id", async (req, res) => {
  console.log("maria Db");
  const type = req.params.type;
  const id = req.params.id;
  console.log([type, id]);
  const query = "DELETE FROM " + type + " WHERE u_id = " + id;

  try {
    const result = await db.query(query, [id]);
    res.send("User Deleted");
  } catch (err) {
    throw err;
  }
});
const db = mariadb.createPool({
  user: "root",
  host: "127.0.0.1",
  password: "Trsgunasekara@123",
  database: "dy",
});
module.exports = admin;
