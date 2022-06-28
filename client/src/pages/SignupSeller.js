

import React, { useState, useEffect } from "react";
import Axios from "axios";
import '../component/styles/st.css'
import Button from '@material-ui/core/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import * as yup from "yup";

import { ErrorMessage, Formik, Form, Field, } from "formik";
const SignupSeller = ({ submitForm }) => {
 



    
    const [passwordShown, setPasswordShown] = useState(false);

   
    const togglePassword = () => {
    
      setPasswordShown(!passwordShown);
    };

    const addSeller = (values) => {
      Axios.post("http://localhost:3001/sellerReg", {
        fname:values.fname,
        lname:values.lname,
        contactno:values.contactno,
        email:values.email,
        password: values.password,
      }).then((response) => {
        
        if(response.data.msg==="User registered successfully and check your email"){
          alert(response.data.msg);
          window.location = '/SigninType';
        }
        else{
        alert(response.data.msg);
        }
        
      });
    };
  

 
    const phoneRegExp = "^[0].{9}$"    
    const digitsOnly = (value) => /^\d+$/.test(value)
    const validationsRegister = yup.object().shape({
      fname: yup
      .string()
      .required('First name is required'),
      lname: yup
      .string()
      .required('Last name is required'),
      contactno: yup
      .string()
      .length(10,"Phone number length should 10 characters long")
      .test('Digits only', "Phone number should contain only digits", digitsOnly)
      .matches(phoneRegExp,"Contact number should start with zero")
      .required('A phone number is required'),
      email: yup
        .string()
        .email("invalid email")
        .required("Email is mandatory"),
      password: yup
        .string()
        .min(8, "Password must be at least 8 characters long")
        .required("Password is mandatory"),
      confirmation: yup
        .string()
        .oneOf([yup.ref("password"), null], "The passwords are different")
        .required("Password confirmation is mandatory"),
    });
  
    return (
      <div>
     <div className="page">
      <h1 style={{ marginLeft:480,fontWeight:"bolder",fontSize:40,marginBottom:5, fontFamily:"sans-serif",fontSize:50}}>Sign up as Seller</h1>
        <br/>
      <div className="container">
          <Formik
        initialValues={{}}
        onSubmit={addSeller}
        validationSchema={validationsRegister}
       
      >
          
        <Form className="register-form">
          <div className="register-form-group">
            <Field name="fname" className="form-field" placeholder="First name"  required
             
            />

            <ErrorMessage
              component="span"
              name="fname"
              className="form-error"
            />
          </div>
          <div className="register-form-group">
            <Field name="lname" className="form-field" placeholder="Last name" required
            
            />
            <ErrorMessage
              component="span"
              name="lname"
              className="form-error"
            />
           
          </div>
          <div className="register-form-group">
            <Field name="contactno" className="form-field" placeholder="Contact number"  required 
            
            />

            <ErrorMessage
              component="span"
              name="contactno"
              className="form-error"
            />
          </div>

          <div className="register-form-group">
            <Field name="email" className="form-field" placeholder="Email"    required
            
            
            />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            
                          />
          </div>

          <div className="form-group">
            <Field name="password" className="form-field" placeholder="Password" type={passwordShown ? "text" : "password"} required
            
           
            />
            <VisibilityOffIcon onClick={togglePassword} className="visibility"/>
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field
              name="confirmation"
              className="form-field"
              placeholder="Confirm password"
              type={passwordShown ? "text" : "password"}
              required
            />
             <VisibilityOffIcon onClick={togglePassword}/>
            <ErrorMessage
              component="span"
              name="confirmation"
              className="form-error"
            />
          </div>
<br/>
          <Button type="submit" variant="outlined" color="primary"  style={{ height: "2%", width: "30%", 
         color:"black",border: '2px solid',
        fontSize: "15px",backgroundColor: "#8a9c8f"}} >
              Sign up 
            </Button>
        </Form>
      </Formik>
      </div>
      </div>
      </div>
      
    );
        }
export default SignupSeller;
