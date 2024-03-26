import React from 'react';
import PropTypes from 'prop-types';
import './receipts.css';
import {useLocation} from "react-router-dom";
import Dashboardmenu from "../dashboardmenu/dashboardmenu";

const Receipts = () => {

   // const location=useLocation()
    return(
  <div className="receipts">


      <Dashboardmenu/>

  </div>
)};

Receipts.propTypes = {};

Receipts.defaultProps = {};

export default Receipts;
