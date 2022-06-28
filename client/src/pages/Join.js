import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { default as socket } from "../components/ws";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Join = () => {
  const email = localStorage.getItem("email");
  const [nickname, setNickname] = useState(
    email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1)
  );

  //let userObj = {};

  const history = useHistory();
  const handleOnClick = () => history.push(`/chat/${nickname}`);

  useEffect(() => {
    localStorage.setItem("chatConnected", "true");
  }, []);

  const validate = () => {
    if (nickname === "") {
      alert("Empty field. Please try again...");

      window.location.reload(false);
    } else {
      submitNickname();
      handleOnClick();
    }
  };

  const submitNickname = () => {
    socket.emit("user nickname", nickname);
  };

  return (
    <div className='App'>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant='h2' gutterBottom component='div'>
          Customer Page
        </Typography>

        <div>
          <ol>
            {/* <TextField
              type='text'
              fullWidth
              placeholder='Username'
              onChange={(e) => setNickname(e.target.value)}
            /> */}
          </ol>
          <br />
          <Button
            id='btn'
            type='submit'
            fullWidth
            variant='contained'
            style={{ marginLeft: "100" }}
            onClick={() => {
              validate();
            }}
          >
            Chat With Us
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Join;
