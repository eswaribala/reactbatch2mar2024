import {configureStore} from "@reduxjs/toolkit";
import RootReducer from "../reducers";


const index = configureStore({
    reducer:   RootReducer,

});

export default index;