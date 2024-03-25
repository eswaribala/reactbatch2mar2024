import {configureStore} from "@reduxjs/toolkit";
import RootReducer from "../reducers";
//import registrationSlice from "../reducers/signupreducerv1";
import reducer from '../reducers/index'


const index = configureStore({
    reducer

});

export default index;