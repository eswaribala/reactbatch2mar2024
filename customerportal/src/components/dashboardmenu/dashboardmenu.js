import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './dashboardmenu.css';
import Logo from "../Logo/Logo";
import {Menubar} from "primereact/menubar";
import {items} from "../../models/Items";
import {useNavigate} from "react-router-dom";
import {CustomerContext} from "../dashboard/dashboard";

const Dashboardmenu = ({name}) => {
    const navigate=useNavigate();
    const firstName = useContext(CustomerContext)
    const items=[
        {
            label: 'Home',
            icon: 'pi pi-home',
            command:()=>{
                navigate("/dashboard")
            }
        },
        {
            label: 'My Tickets',
            icon: 'pi pi-ticket'
        },
        {
            label: 'Due Payments',
            icon: 'pi pi-money-bill',
            command:()=>{
                navigate("/duepayment",{state:{name:firstName}})
            }
        },
        {
            label: 'Receipts',
            icon: 'pi pi-book'
        },
        {
            label: 'More',
            icon: 'pi pi-search',
            items:[
                {
                    label: 'Branch Locator',
                    icon: 'pi pi-globe'
                },
                {
                    label: 'New/Vacancy Chit Group',
                    icon: 'pi pi-plus'
                },
                {
                    label: 'FAQ',
                    icon: 'pi pi-question-circle'
                },
            ]
        }
    ]
    return(
    <header className="header">
        <Logo/>
        <Menubar key={items.label} model={items}></Menubar>
        <div className="welcome">
            <h4>Hi&nbsp;&nbsp;{firstName}{name}</h4>
            &nbsp;&nbsp;<span className="pi pi-user"></span>
        </div>
    </header>
)}

Dashboardmenu.propTypes = {};

Dashboardmenu.defaultProps = {};

export default Dashboardmenu;
