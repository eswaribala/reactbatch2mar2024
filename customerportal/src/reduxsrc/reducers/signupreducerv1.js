import { createSlice } from '@reduxjs/toolkit';
import RegistrationService from "../services/signupservice";
import StateService from "../services/stateservice";
const registrationSlice = createSlice({
    name: "customer",
    initialState: {
        customer: [],
    },
    reducers: {
        save: (state, param) => {

            let res = RegistrationService.Create(param);
            const payload = res.data;
            state.customer = [...state.customer, payload];
            StateService.Save(state.customer);
        },
    }
});
const { actions, reducer } = registrationSlice
export const { save } = actions;
export default reducer;