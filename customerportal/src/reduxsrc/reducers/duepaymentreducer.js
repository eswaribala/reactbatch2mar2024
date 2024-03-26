import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import {ExpressUrl} from "../../config/Configuration";

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
    axios
        .get(ExpressUrl+"api/customers")
        .then((response) => {
            dispatch(fetch(response.data));
        })
        .catch((error) => console.log(error));
};


