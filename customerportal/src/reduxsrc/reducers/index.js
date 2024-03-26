import SignupReducer from "./signupreducer";
import reducer from "./signupreducerv1";
import { combineReducers } from '@reduxjs/toolkit'
import registrationSlicer from "../reducers/signupreducerv1";
import duePaymentSlicer from "./duepaymentreducer";

export default combineReducers({
     slicer:registrationSlicer,
     duePaymentSlicer:duePaymentSlicer
})