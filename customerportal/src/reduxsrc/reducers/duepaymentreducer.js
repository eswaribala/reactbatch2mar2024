import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {ExpressUrl} from "../../config/Configuration";
export const customerSlice = createSlice({
    name: "customers",
    initialState: {
        list: []
    },
    reducers: {
        // action
        setCustomerList: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { setCustomerList } = customerSlice.actions;

export const fetchAllCustomers = () => (dispatch) => {
    axios
        .get(ExpressUrl+"api/customers")
        .then((response) => {
            dispatch(setCustomerList(response.data));
        })
        .catch((error) => console.log(error));
};

export default customerSlice.reducer;
