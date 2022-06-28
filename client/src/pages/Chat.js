import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams, useHistory } from "react-router-dom";
import { default as socket } from "../components/ws";
import UserOnline from "../components/UserOnline";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import styles from "../my-style.module.css";
import { Button, Card } from "@material-ui/core";

function Chat() {
  const email = localStorage.getItem("email");
  const [nickname, setNickname] = useState(
    email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1)
  );

  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);
  const [usersOnline, setUsersOnline] = useState([]);
  const [toUser, setToUser] = useState("");
  const history = useHistory();
  const [search, setNewSearch] = useState("");
  const [MsgList, setMsgList] = useState([]);

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? usersOnline
    : usersOnline.filter((person) =>
        person.toLowerCase().includes(search.toLowerCase())
      );

  useEffect(() => {
    if (!localStorage.getItem("chatConnected")) {
      history.push(`/`);
    }
    // setNickname(user_nickName);
    console.log("user_nickName", nickname);

    window.addEventListener("beforeunload", () =>
      localStorage.removeItem("chatConnected")
    );
    // getAllUserDetails();

    socket.on("chat message", ({ nickname, msg }) => {
      setChat([...chat, { nickname, msg }]);
      //getMsgByName(nickname);
    });

    socket.on("private msg", ({ id, nickname, msg }) => {
      setChat([...chat, ` ${nickname}: ${msg}`]);
    });

    let objDiv = document.getElementById("msg");
    objDiv.scrollTop = objDiv.scrollHeight;

    return () => {
      socket.off();
    };
  }, [chat, toUser, nickname, history]);

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("new-user");
    });

    socket.on("users-on", (list) => {
      setUsersOnline(list);
    });

    // socket.on("welcome", (user) => {
    //   setChat([...chat, `Welcome to our chat ${user} `]);
    // });

    // socket.on("user-disconnected", (user) => {
    //   if (user !== null) {
    //     setChat([...chat, `${user} left the chat `]);
    //   }
    // });

    return () => {
      socket.off();
    };
  }, [chat]);

  const submitMsg = (e) => {
    e.preventDefault();

    if (msg == "") {
      toast("Enter a message.", {
        duration: 4000,
      });
    } else if (toUser == nickname) {
      toast("Select a different user.", {
        duration: 4000,
      });
    } else if (toUser !== "") {
      let selectElem = document.getElementById("usersOn");
      selectElem.selectedIndex = 0;
      socket.emit("chat message private", { toUser, nickname, msg });
      setChat([...chat, { nickname, msg }]);
      setChat([...chat, `Me: ${msg}`]);
      setMsg("");
      setToUser("");
      // Axios.post("http://localhost:3001/send", {
      //   message: msg,
      //   nickname: nickname,
      // }).then(() => {
      //   setMsgList([
      //     ...MsgList,
      //     {
      //       message: msg,
      //       nickname: nickname,
      //     },
      //   ]);
      // });
    }
  };

  const saveUserToPrivateMsg = (userID) => {
    setToUser(userID);
  };

  return (
    <div className={styles.chat}>
      <Card
        style={{
          maxWidth: 850,
          maxHeight: 645,
          padding: "5px 5px",

          margin: "0 auto",
          backgroundColor: "#ebebeb",
        }}
      >
        <div className={styles.body2}>
          {/* Users online */}
          <div className={styles.sidebar}>
            <Typography variant='h5' gutterBottom component='div'>
              #Online: ({usersOnline !== null ? usersOnline.length : "0"})
            </Typography>

            <TextField
              type='text'
              placeholder='search'
              value={search}
              onChange={handleSearchChange}
            />
            {filtered?.map((person) => {
              return (
                <button
                  key={person.id}
                  onClick={() => saveUserToPrivateMsg(person)}
                  className={styles.side}
                >
                  <UserOnline nickname={person} />
                </button>
              );
            })}
          </div>
          <div className={styles.message}>
            {/* Messages */}
            <Typography
              marginLeft={20}
              variant='h3'
              gutterBottom
              component='div'
            >
              Main Chat
            </Typography>
            <div id='msg' className={styles.windoww}>
              <ul>
                {chat.map((el, index) => (
                  <li key={index}>
                    {el.nickname != null ? (
                      `${el.nickname}: ${el.msg}`
                    ) : (
                      <p>{el}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <form>
              <div>
                <select
                  className='lg:hidden text-xs flex-1 appearance-none border border-gray-300 w-full py-2 px-1 lg:px-4 bg-black text-green-400 placeholder-gray-400 shadow-sm focus:outline-none'
                  id='usersOn'
                  onChange={(e) => saveUserToPrivateMsg(e.target.value)}
                >
                  {/* <option value='' className=''>
                  Everyone
                </option> */}
                  {usersOnline !== null
                    ? usersOnline.map((el, index) => (
                        <option value={el} className='' key={index}>
                          {el}
                        </option>
                      ))
                    : ""}
                </select>
              </div>
              <div className={styles.send}>
                {" "}
                <div className={styles.foot}>
                  <span>
                    {toUser !== "" ? (
                      <p className={styles.toUser}>To: {toUser}</p>
                    ) : (
                      ""
                    )}
                  </span>
                  <TextField
                    size='small'
                    type='text'
                    fullWidth
                    name='message'
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
                  />
                </div>
                <div>
                  <Button
                    variant='contained'
                    onClick={(e) => {
                      submitMsg(e);
                    }}
                  >
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Chat;
