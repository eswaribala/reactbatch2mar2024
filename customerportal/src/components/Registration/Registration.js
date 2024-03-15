import React from 'react';

import './Registration.css';
import {Button, TextField} from "@mui/material";
import * as yup from 'yup'
import {useFormik} from "formik";
import RegisterLogoPath from '../../assets/register.jpg'

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
    dob: yup
        .string("Enter DOB")
        .required("DOB Required"),
    mobileNo: yup
        .string("Enter Mobile No")
        .required("Mobile No Required")
        .matches(/^([+]\d{2}[ ])?\d{10}$/,
            "Mobile No Should be in 10 digits")

})



const Registration = () => {

    const formik=useFormik({
        initialValues:{
            "firstName":"",
            "lastName":"",
            "dob":"",
            "mobileNo":0
        },
        validationSchema:validationSchema,
        onSubmit:(values)=>{
          alert(JSON.stringify(values));
        }
    })

    return(
     <div>
     <img src={RegisterLogoPath} className="Registration"/>
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
         <TextField id="dob"

                    type="date"
                    value={formik.values.dob}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.dob && Boolean(formik.errors.dob)}
                    helperText={formik.touched.dob && formik.errors.dob}
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
         <Button type="submit" color="success" variant="contained">
           Continue To Register
         </Button>
     </form>
     </div>
)};


export default Registration;
