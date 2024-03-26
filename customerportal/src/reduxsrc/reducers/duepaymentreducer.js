import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import {ExpressUrl} from "../../config/Configuration";
import {AES, enc} from "crypto-js";
const secretPass="wfiyfryefv"
const duePaymentSlice = createSlice({
    name: "customers",
    initialState: {
        customers: {},
        isLoaded:false
    },
    reducers: {

        fetch:  (state, param) => {

            return{
                ...state,
                isLoaded: true,
                customers:param.payload

            }
        },
    }
});



// Actions

export const { fetch } = duePaymentSlice.actions
export default duePaymentSlice.reducer

export const fetchAllCustomers = () => (dispatch) => {
    let customerData=[];
    axios
        .get(ExpressUrl+"api/customers")
        .then((response) => {

            response.data.map((customer)=>{
                let obj={
                    "firstName":JSON.parse(AES.decrypt(customer.firstName, secretPass)
                        .toString(enc.Utf8)),
                    "lastName":JSON.parse(AES.decrypt(customer.lastName, secretPass)
                        .toString(enc.Utf8)),
                    "email":customer.email,
                    "phone":customer.phone
                }
                customerData.push(obj);

            })
            alert(JSON.stringify(customerData));

            dispatch(fetch(customerData));


        })
        .catch((error) => console.log(error));
};


