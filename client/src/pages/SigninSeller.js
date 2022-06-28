import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import "../component/styles/st.css";
import Button from "@material-ui/core/Button";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";

const SigninSeller = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const handleLogin = (values) => {
    localStorage.setItem("email", values.email);
    Axios.post("http://localhost:3001/loginSeller", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      if (response.data.msg === "user logged") {
        alert(response.data.msg);
        window.location = "/seller/";
      } else {
        alert(response.data.msg);
      }
    });
  };
  const validationsLogin = yup.object().shape({
    email: yup.string().email("invalid email").required("Email is mandatory"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is mandatory"),
  });

  return (
    <div>
      <div className='page'>
        <h1
          style={{
            marginLeft: 480,
            fontWeight: "bolder",
            fontSize: 40,
            marginBottom: 5,
            fontFamily: "sans-serif",
            fontSize: 50,
          }}
        >
          Sign in as Seller
        </h1>
        <br />
        <div className='container'>
          <Formik
            initialValues={{}}
            onSubmit={handleLogin}
            validationSchema={validationsLogin}
          >
            <Form className='login-form'>
              <div className='login-form-group'>
                <Field
                  name='email'
                  className='form-field'
                  placeholder='Email'
                />

                <ErrorMessage
                  component='span'
                  name='email'
                  className='form-error'
                />
              </div>

              <div className='form-group'>
                <Field
                  name='password'
                  className='form-field'
                  placeholder='Password'
                  type={passwordShown ? "text" : "password"}
                />
                <VisibilityOffIcon onClick={togglePassword} />
                <ErrorMessage
                  component='span'
                  name='password'
                  className='form-error'
                />
              </div>
              <br />
              <Button
                type='submit'
                variant='contained'
                style={{
                  height: "2%",
                  width: "30%",
                  color: "black",
                  border: "2px solid",
                  fontSize: "15px",
                  backgroundColor: "#8a9c8f",
                }}
              >
                Sign In
              </Button>
            </Form>
          </Formik>
          <p>
            <Link to='/forgetPwSeller'> Forgot Password</Link>
          </p>
          <p>
            Don't have an account
            <Link to='/signupType'> Sign-up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninSeller;
