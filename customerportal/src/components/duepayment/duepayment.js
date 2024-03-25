import React from 'react';
import PropTypes from 'prop-types';
import './duepayment.css';
import Dashboardmenu from "../dashboardmenu/dashboardmenu";
import {useLocation} from "react-router-dom";

const Duepayment = () => {
 // const location=useLocation()
    return(
  // <Dashboardmenu name={location.state.name}/>
  <Dashboardmenu />
)};

Duepayment.propTypes = {};

Duepayment.defaultProps = {};

export default Duepayment;
