import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import '../component/styles/st.css'
import Button from '@material-ui/core/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";

const ForgetPwCustomer = ()=>{


    const validationsRegister = yup.object().shape({
      
        email: yup
          .string()
          .email("Invalid email"),
          
       
      });
     
      const sendEmailCustomer = (values) => {
 
    
        Axios.post("http://localhost:3001/sendEmailCustomer", {
         
          email: values.email,
          
          
        }).then((response) => {
            alert(response.data.err);   
        
        });
      };
    
      
       
     return (
      <div>
    <div className="page">
        <h1 style={{ marginLeft:440,fontWeight:"bolder",fontSize:40,marginBottom:5, fontFamily:"sans-serif",fontSize:50}}>Sign in as Customer</h1>
          <br/>
        <div className="container">
      <Formik
       initialValues={{}}
         validationSchema={validationsRegister}
         onSubmit={sendEmailCustomer}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="email" className="form-field" placeholder="Email" />
  
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
        
        
          <br/>
          <Button  type="submit" variant="contained"style={{ height: "2%", width: "30%", 
           color:"black",border: '2px solid',backgroundColor: "#8a9c8f",
          fontSize: "15px"}}>
            Reset Password 
          </Button>
        </Form>
      </Formik>

                
                </div>
                </div>
        </div>
      );
     }
  
  export default ForgetPwCustomer;