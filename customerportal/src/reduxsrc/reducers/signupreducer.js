
//redux state
import {SAVE_REGISTRATION} from "../types/types";



const SignupReducer=(state={},action)=>{
    switch(action.type){
        case SAVE_REGISTRATION :
            return{
                ...state,
               customer:action.payload,
               isLoaded:true
            }
        default: return state;
    }
}

export default  SignupReducer;