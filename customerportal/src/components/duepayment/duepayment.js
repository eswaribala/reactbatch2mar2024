import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './duepayment.css';
import Dashboardmenu from "../dashboardmenu/dashboardmenu";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCustomers} from "../../reduxsrc/reducers/duepaymentreducer";

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
                        {
                           customers.map((customer)=>{
                               return(
                                   <h1>{customer.firstName}</h1>
                               )
                           })

                        }
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
