import React, {createContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import './duepayment.css';
import Dashboardmenu from "../dashboardmenu/dashboardmenu";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCustomers} from "../../reduxsrc/reducers/duepaymentreducer";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import { Button } from 'primereact/button';
import Pdfdocument from "../pdfdocument/pdfdocument";


export const DueContext=createContext()
const Duepayment = () => {
    // const location=useLocation()
    const dispatch = useDispatch();
    const customers = useSelector(state =>
        state.topSlicer.duePaymentSlicer.customers)
    const isLoaded = useSelector(state =>
        state.topSlicer.duePaymentSlicer.isLoaded)

    useEffect(() => {
        dispatch(fetchAllCustomers());
    }, [dispatch]);
    return (
        // <Dashboardmenu name={location.state.name}/>
        <>
            <Dashboardmenu/>
            {
                (isLoaded)?
                    <>
                      <DueContext.Provider value={customers} >

                       <Pdfdocument  />

                      </DueContext.Provider>
                    </>:
                    <>
                        <h1>Customer Not Available</h1>
                    </>
            }

        </>
    )
}

Duepayment.propTypes = {};

Duepayment.defaultProps = {};

export default Duepayment;
