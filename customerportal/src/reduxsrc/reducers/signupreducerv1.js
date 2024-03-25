import { createSlice } from '@reduxjs/toolkit';
import RegistrationService from "../services/signupservice";
import StateService from "../services/stateservice";
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
            StateService.Save(param.payload);
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