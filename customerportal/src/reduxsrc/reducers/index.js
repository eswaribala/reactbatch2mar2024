import SignupReducer from "./signupreducer";
import reducer from "./signupreducerv1";
import { combineReducers } from '@reduxjs/toolkit'
import registrationSlice from "../reducers/signupreducerv1";
import {customerSlice} from "./duepaymentreducer";

export default combineReducers({
     registrationSlice,
     customerSlice
})