import {configureStore} from "@reduxjs/toolkit";
import RootReducer from "../reducers";
//import registrationSlice from "../reducers/signupreducerv1";
import rootReducer from '../reducers/index'


const index = configureStore({
    reducer:{
        topSlicer: rootReducer
    }

});

export default index;