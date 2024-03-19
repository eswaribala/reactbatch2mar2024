import React from 'react';

import './dashboard.css';
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Menubar} from "primereact/menubar";
import {items} from "../../models/Items";
import Logo from "../Logo/Logo";
const Dashboard = () => {
    const firstName=sessionStorage.getItem("firstName");
    const lastName=sessionStorage.getItem("lastName");
    const email=sessionStorage.getItem("email");
    const phone=sessionStorage.getItem("phone");
    const isSubmit=sessionStorage.getItem("isSubmit");
   if(isSubmit) {
       return (
           <div>
               <header className="header">
                   <Logo/>
                   <Menubar key={items.label} model={items}/>
                   <div className="welcome">
                       <h4>Hi&nbsp;&nbsp;{firstName}</h4>
                       &nbsp;&nbsp;&nbsp;<span className="pi pi-user"></span>
                   </div>
               </header>
               <article className="article">
                   <div className="Account">
                       <AccountCircleIcon color="primary" sx={{fontSize: 110}}
                                          className="AccountCircle"></AccountCircleIcon>
                   </div>
                   <div className="center">

                       <div>
                           <h1>Welcome, {firstName} &nbsp;&nbsp;{lastName} </h1>
                           <div className="Dashboard">

                               <PhoneIcon fontSize="small" color="success"></PhoneIcon><h4>{phone} </h4>
                               &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<EmailIcon fontSize="small"
                                                                               color="warning"></EmailIcon> <h4
                               className="AccountCircle">{email} </h4>
                           </div>
                       </div>

                   </div>

               </article>
           </div>
       )
   }
};


export default Dashboard;
