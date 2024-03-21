import {Url} from "../../config/Configuration";
import axios from "axios";
const Create=(data)=>{
    let requestData={
        "id": 0,
        "name": {
            "firstName": data.firstName,
            "lastName": data.lastName,
            "middleName": ""
        },
        "email": data.email,
        "password": data.password,
        "phone": data.mobileNo
    }
    return axios.post(Url+"api/v1/Customers",requestData);

}



const RegistrationService={
Create
}

export default RegistrationService;