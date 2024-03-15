import React, {useEffect, useState} from 'react';
import './LoginForm.css';
import * as yup from 'yup';
import {Button, TextField} from "@mui/material";
import {useFormik} from "formik";
import LoginImagePath from '../../assets/login.jpg'
import Registration from "../Registration/Registration";
const validationSchema=yup.object({
      email:yup
          .string("Enter Email")
          .email("Email Format not matching")
          .required("Email Address Required"),
      password: yup
          .string("Enter Password")
          .min(8,"Minimum 8 Characters")
          .required("Password Required")

})




const LoginForm = () => {
    const [value, setNewValue] = useState(false);
    const [submitValue, setSubmitValue] = useState(false);
/*
    function handleChange(event) {
        let value = true;
        setNewValue(value);
        change(value);
    }
    function handleSubmit() {
        let value = true;
        setSubmitValue(value);
        submit(value);
    }
    */

      //formik object


      const formik=useFormik({

            initialValues:{
                  "email":"sample@gmail.com",
                  "password":"*******"
            },
            validationSchema:validationSchema,
            onSubmit:(values)=>{
                alert(JSON.stringify(values))
                handleSubmit()
            }

      })


      return(
              <div>

              <img src={LoginImagePath} className="Image"/>
              <form onSubmit={formik.handleSubmit}>
                  <TextField
                      id="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      onError={formik.errors.email && Boolean(formik.errors.email)}
                      helperText={formik.errors.email}
                      variant="outlined"
                      fullWidth
                      margin="dense">

                  </TextField>
                  <TextField id="password"
                             type="password"
                             value={formik.values.password}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             onError={formik.errors.password &&
                                 Boolean(formik.errors.password)}
                             helperText={formik.errors.password}
                              variant="outlined"
                               fullWidth
                               margin="dense">

                  </TextField>
                  <Button variant="contained" type="submit" >Login to continue</Button>

              </form>
              <div className="Signup">
              <p>New User? <a href="#" onClick={handleChange}>Create New Account</a></p>
              </div>
              </div>
)};


export default LoginForm;
