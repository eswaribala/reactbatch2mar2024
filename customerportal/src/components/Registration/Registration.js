import React, {useState} from 'react';

import './Registration.css';
import {Box, Button, TextField} from "@mui/material";
import * as yup from 'yup'
import {useFormik} from "formik";
import RegisterLogoPath from '../../assets/register.jpg'
import Captcha from "../captcha/captcha";
import {useDispatch, useSelector} from "react-redux";
import {save} from '../../reduxsrc/reducers/signupreducerv1'

const validationSchema=yup.object({
    firstName:yup
        .string("Enter First Name")
        .required("First Name Required")
        .matches(
            /[A-Za-z]{5,25}/,
            "First Name must contain minimum 5 characters and maximum 25 characters"
        ),
    lastName:yup
        .string("Enter Last Name")
        .required("Last Name Required")
        .matches(/[A-Za-z]{3,25}/,
            "Last Name must contain minimum 3 characters and maximum 25 characters "),
    email: yup
        .string("Enter Email")
        .required("Email Required")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Email Format mismatch"),
    mobileNo: yup
        .string("Enter Mobile No")
        .required("Mobile No Required")
        .matches(/^([+]\d{2}[ ])?\d{10}$/,
            "Mobile No Should be in 10 digits"),
    password: yup
        .string("Enter Password")
        .required("Password Required")
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            "Password Format mismatch"),

})




const Registration = () => {

    const[captcha, setCaptcha]=useState('');
    const[userText, setUserText]=useState('')
    const dispatch=useDispatch();
    const { customer, isLoaded } = useSelector(state => state.slicer);

    const formik=useFormik({
        initialValues:{
            "firstName":"",
            "lastName":"",
            "email":"",
            "mobileNo":0,
            "password":""
        },
        validationSchema:validationSchema,
        onSubmit:(values)=>{
          alert(JSON.stringify(values));
          alert(captcha+","+userText);
         // if(captcha === userText){
              alert("success")
              dispatch(save(values));
                  //.then(response=>{
                 //alert(JSON.stringify(response));
              //})

         // }else{
         //     alert("incorrect");
        //  }


        }
    })

    function handleCaptchaChange(value1,value2){
       setCaptcha(value1)
        setUserText(value2)

    }
    return(
     <div className="Registration">
        {
             (isLoaded)?
                 <>
                     <h1>{customer.firstName}</h1>

                 </>:
                 <>
                 <h1>Customer Not Available</h1>
                 </>
         }

     <img src={RegisterLogoPath} className="Image"/>
     <form onSubmit={formik.handleSubmit}>
         <TextField
             id="firstName"
             type="text"
             label="First Name"
             value={formik.values.firstName}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             error={formik.errors.firstName && Boolean(formik.errors.firstName)}
             helperText={formik.touched.firstName && formik.errors.firstName}
             fullWidth
             variant="outlined"
             margin="dense">

         </TextField>
         <TextField id="lastName"
                    label="Last Name"
                    type="text"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    fullWidth
                    variant="outlined"
                    margin="dense">

         </TextField>
         <TextField id="email"

                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    fullWidth
                    variant="outlined"
                    margin="dense">

         </TextField>
         <TextField id="password"

                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    fullWidth
                    variant="outlined"
                    margin="dense">

         </TextField>
         <TextField id="mobileNo"
                 label="Mobile No"
                    type="number"
                    value={formik.values.mobileNo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.mobileNo && Boolean(formik.errors.mobileNo)}
                    helperText={formik.touched.mobileNo && formik.errors.mobileNo}
                    fullWidth
                    variant="outlined"
                    margin="dense">

         </TextField>
         <Captcha captchaStatus={handleCaptchaChange}/>
         <Button type="submit" color="success" variant="contained">
           Continue To Register
         </Button>
     </form>
     </div>
)};


export default Registration;
