import RegistrationService from "../services/signupservice";
import {SAVE_REGISTRATION} from "../types/types";


export const SaveRegistrationAction=(values)=>async(dispatch)=>{
    try {
        let res = await RegistrationService.Create(values);
        dispatch({
            type: SAVE_REGISTRATION,
            payload: res.data
        })
        return Promise.resolve(res.data);

    }catch(err){
        return Promise.reject(err)
    }
}
