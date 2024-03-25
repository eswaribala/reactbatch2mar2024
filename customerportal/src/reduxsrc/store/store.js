import {configureStore} from "@reduxjs/toolkit";
import RootReducer from "../reducers";
import registrationSlice from "../reducers/signupreducerv1";



const index = configureStore({
    reducer:{
        slicer: registrationSlice
    }

});

export default index;