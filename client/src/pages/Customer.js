import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../component/styles/Home.css";
export default function Customer() {
  return (
    <div className='Login'>
      <Button
        type='submit'
        component={Link}
        to='/Join'
        style={{
          marginTop: 100,
          marginLeft: 500,
          width: "25%",
          padding: "1px 20px",
          color: "black",
          fontSize: "18px",
          border: "2px solid",
        }}
      >
        Chat
      </Button>
    </div>
  );
}
