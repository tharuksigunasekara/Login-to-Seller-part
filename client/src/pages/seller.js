import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import '../component/styles/Home.css' ;
export default function Login() {
  return (
    <div className='Login'>
      <div class='split left'>
        <img
          src='https://cdn.pixabay.com/photo/2020/02/14/18/05/ecommerce-4849055_960_720.jpg'
          alt='pic'
          style={{
            width: 900,
            height: 650,
          }}
        />
      </div>
      <div class='split right'>
        <div>
          <h1 className='title'>Seller Page</h1>
        </div>
        <div class='second'>
          <ul>
            <Button
              component={Link}
              to='/viewProducts'
              type='submit'
              style={{
                height: "25%",
                width: "55%",
                padding: "10px 17px",
                color: "black",
                fontSize: "15px",
                border: "2px solid",
                marginLeft:"-50px",
                marginTop:"-20%"
              }}
              onClick={() => {}}
            >
              View Product
            </Button>
          </ul>
          <ul>
            <Button
              style={{
                height: "25%",
                width: "55%",
                padding: "10px 17px",
                color: "black",
                fontSize: "15px",
                border: "2px solid",
                marginLeft:"-50px"
              }}
              component={Link}
              to='/AddProduct'
              type='submit'
              // variant='contained'
              // sx={{ mt: 6, mb: 1 }}
              onClick={() => {}}
            >
              Add Product
            </Button>
          </ul>
        </div>
      </div>
    </div>
  );
}