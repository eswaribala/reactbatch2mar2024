import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './toast.css';
import {Alert, Snackbar} from "@mui/material";

const Toast = ({showValue,positionValue,messageValue}) => {
    const [show, setShow] = React.useState(showValue);
    const [position, setPosition]=useState({
        vertical:positionValue.vertical,
        horizontal:positionValue.horizontal
    })
    const { vertical, horizontal } = position;
    function handleShowClose(){
        setShow(false);
    }
    return(
    <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={show}
        autoHideDuration={5000}
        onClose={handleShowClose}
        message="This Snackbar will be dismissed in 5 seconds."
    >
        <Alert
            onClose={handleShowClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
        >
            {messageValue}
        </Alert>
    </Snackbar>
)};

Toast.propTypes = {};

Toast.defaultProps = {};

export default Toast;
