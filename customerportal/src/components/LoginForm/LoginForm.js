import React, {useEffect, useState} from 'react';
import './LoginForm.css';
import * as yup from 'yup';
import {Button, InputAdornment, TextField} from "@mui/material";
import {useFormik} from "formik";
import LoginImagePath from '../../assets/login.jpg'
import Registration from "../Registration/Registration";
import Captcha from "../captcha/captcha";
import {useNavigate} from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios'

const RestAPIUrl="http://54.165.173.13:8085/api/v1/customers/"

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




const LoginForm = ({registerStatus,submitStatus}) => {
    const [value, setNewValue] = useState(false);
    const [submitValue, setSubmitValue] = useState(false);
    const[captchaText,setCaptchaText]=useState('')
    const[userText,setUserText]=useState('')
    const[isSubmit,setIsSubmit]=useState(false);
    const navigate=useNavigate();
    function handleChange(){
        let value=true;
        registerStatus(value);
    }

      //formik object


      const formik=useFormik({

            initialValues:{
                  "email":"sample@gmail.com",
                  "password":"*******"
            },
            validationSchema:validationSchema,
            onSubmit:(values)=>{
               // alert(JSON.stringify(values))
               alert(captchaText+","+userText)
               if(captchaText === userText){
                   alert("success");
                   axios.get(RestAPIUrl+values.email+"/"+values.password).then(
                       response=>{
                           //alert(JSON.stringify(response.data));
                        if((response.data !== '') && (response.data.constructor === Object)&&
                           (Object.keys((response.data).length>0)))
                           {
                               sessionStorage.setItem("customerId", response.data.id);
                               sessionStorage.setItem("firstName", response.data.name.firstName);
                               sessionStorage.setItem("lastName", response.data.name.lastName);
                               sessionStorage.setItem("email", response.data.email);
                               sessionStorage.setItem("phone", response.data.phone);
                               handleSubmit()
                               sessionStorage.setItem("isSubmit",true);
                               navigate("/dashboard")
                           }else{
                            navigate("/")
                        }
                       }
                   )


               }else{
                   alert("Not Matching..");
               }


            }

      })

    function handleSubmit(){
        setIsSubmit(true);
        submitStatus(true);
    }

      function handleCaptchaChange(value1,value2){
        setCaptchaText(value1);
        setUserText(value2);
     }

      return(
              <div>

              <img src={LoginImagePath} className="Image"/>
              <form onSubmit={formik.handleSubmit}>

                  <TextField
                      id="email"
                      type="email"
                      InputProps={{
                          startAdornment: (
                              <InputAdornment position="start">
                                  <EmailIcon />
                              </InputAdornment>
                          ),
                      }}
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
                             InputProps={{
                                 startAdornment: (
                                     <InputAdornment position="start">
                                         <LockIcon />
                                     </InputAdornment>
                                 ),
                             }}
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
                  <Captcha captchaStatus={handleCaptchaChange}/>
                  <Button variant="contained" type="submit" >Login to continue</Button>

              </form>
              <div className="Signup">
              <p>New User? <a href="#" onClick={handleChange}>Create New Account</a></p>
              </div>
              </div>
)};


export default LoginForm;
