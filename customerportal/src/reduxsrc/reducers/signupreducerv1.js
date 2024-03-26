import { createSlice } from '@reduxjs/toolkit';
import RegistrationService from "../services/signupservice";
import StateService from "../services/stateservice";
import {AES,enc} from "crypto-js";
const secretPass="wfiyfryefv"
const registrationSlice = createSlice({
    name: "customers",
    initialState: {
        customer: {},
        isLoaded:false
    },
    reducers: {

        save:  (state, param) => {
            let res =  RegistrationService.Create(param);
            //const payload = res.data;
            //state.customer = [...state.customer, payload];
            StateService.Save(param.payload).then(response=>{
                console.log(JSON.stringify(response.data))
                 JSON.parse(AES.decrypt(response.data.data.firstName, secretPass)
                     .toString(enc.Utf8))
            })
            return{
                ...state,
                isLoaded: true,
                customer:param.payload

            }
        },
    }
});



// Actions

export const { save } = registrationSlice.actions
export default registrationSlice.reducer