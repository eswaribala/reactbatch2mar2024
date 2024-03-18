import React from 'react';

import './dashboard.css';
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Dashboard = () => {
    const firstName=sessionStorage.getItem("firstName");
    const lastName=sessionStorage.getItem("lastName");
    const email=sessionStorage.getItem("email");
    const phone=sessionStorage.getItem("phone");

    return (
    <article className="article">
        <div className="Account">
        <AccountCircleIcon  sx={{ fontSize: 102 }} className="AccountCircle"></AccountCircleIcon>
        </div>
        <div className="center">

            <div>
                <h4>Welcome, {firstName} &nbsp;&nbsp;{lastName} </h4>
                <div className="Dashboard">
                    <EmailIcon fontSize="small"></EmailIcon> <h4 className="AccountCircle">{email} </h4>
                    &nbsp;&nbsp;&nbsp;<PhoneIcon fontSize="small"></PhoneIcon><h4>{phone} </h4>
                </div>
            </div>

        </div>

    </article>
    )
};


export default Dashboard;
