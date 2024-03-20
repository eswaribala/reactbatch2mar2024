import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './dashboarddialog.css';
import {Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {Button} from "primereact/button";
import {useFormik} from "formik";
import * as yup from "yup";
import axios from "axios";
import {Url} from "../../config/Configuration";
const validationSchema=yup.object({

    chitId:yup
        .string("Enter ChitId")
        .required("ChitId Required")
        .matches(/\d{1,10}$/,
            "Mobile No Should be in 10 digits"),
    dueAmount:yup
        .string("Enter Due Amount")
        .required("Due Amount Required")
        .matches(/\d{1,10}$/,
            "Due Amount Should be in digits"),
    duration:yup
        .string("Enter Duration")
        .required("Duration Required")
        .matches(/\d{1,10}$/,
            "Mobile No Should be in 10 digits"),


})
let openData;
const Dashboarddialog = () => {



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = async() => {
        setOpen(false);
        openData=false
        await sessionStorage.setItem("open",false);
    }


    useEffect(() => {
        let data = sessionStorage.getItem("open");
        if(data === "true")
            openData=true;
        console.log(openData)

    }, [open]);

    const formik=useFormik({
        initialValues:{
            "chitId":0,
            "dueAmount":0,
            "nextAuctionDate":"",
            "duration":0
        },
        validationSchema:validationSchema

    })
    function handleClick(event){

        event.preventDefault();
        let data={
            "transactionId": 0,
            "dueAmount": formik.values.dueAmount,
            "nextAuctionDate": formik.values.nextAuctionDate,
            "duration": formik.values.duration,
            "chitId": 0,
            "chit": {
                "chitId": 0,
                "chitValue": 0,
                "totalDuration": 0,
                "installmentAmount": 0,
                "customerId": 0,
                "customer": {
                    "id": 0,
                    "name": {
                        "firstName": "rAlFKbwTnaJFQQPVwMz",
                        "lastName": "ntoZfRtHeIQxsl",
                        "middleName": "CIUNwyIowzsLIsuViJIAVJLi"
                    },
                    "email": "string",
                    "password": "string",
                    "phone": 0
                }
            }
        }
        axios.post(Url+"api/v1/ChitTransactions?id="+formik.values.chitId,data)
            .then(response=>{
                alert(JSON.stringify(response));
            })
    }
    return(
      <Dialog open={openData}
            onClose={handleClose}>

        <DialogTitle>Payment Information</DialogTitle>
        <DialogContent>
            <form>
                <TextField
                    id="chitId"
                    type="number"
                    label="Chit Id"
                    value={formik.values.chitId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.chitId && Boolean(formik.errors.chitId)}
                    helperText={formik.touched.chitId && formik.errors.chitId}
                    fullWidth
                    variant="outlined"
                    margin="dense">

                </TextField>
                <TextField
                    id="dueAmount"
                    type="number"
                    label="Due Amount"
                    value={formik.values.dueAmount}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.dueAmount && Boolean(formik.errors.dueAmount)}
                    helperText={formik.touched.dueAmount && formik.errors.dueAmount}
                    fullWidth
                    variant="outlined"
                    margin="dense">

                </TextField>

                <TextField
                    id="nextAuctionDate"
                    type="date"
                    label="Next Auction Date"
                    value={formik.values.nextAuctionDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.nextAuctionDate && Boolean(formik.errors.nextAuctionDate)}
                    helperText={formik.touched.nextAuctionDate && formik.errors.nextAuctionDate}
                    fullWidth
                    variant="outlined"
                    margin="dense">

                </TextField>
                <TextField
                    id="duration"
                    type="text"
                    label="Duration"
                    value={formik.values.duration}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.duration && Boolean(formik.errors.duration)}
                    helperText={formik.touched.duration && formik.errors.duration}
                    fullWidth
                    variant="outlined"
                    margin="dense">

                </TextField>

            </form>
        </DialogContent>
        <DialogActions>
            <Button color="primary" onClick={handleClose}>Cancel</Button>
            <Button  onClick={handleClick}>Proceed To Payment</Button>

        </DialogActions>

    </Dialog>
)};

Dashboarddialog.propTypes = {};

Dashboarddialog.defaultProps = {};

export default Dashboarddialog;
