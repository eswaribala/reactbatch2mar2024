import {Url} from "../../config/Configuration";
import axios from "axios";
const Create=(data)=>{
    alert(JSON.stringify(data.payload))
    let requestData={
        "id": 0,
        "name": {
            "firstName": data.payload.firstName,
            "lastName": data.payload.lastName,
            "middleName": ""
        },
        "email": data.payload.email,
        "password": data.payload.password,
        "phone": data.payload.mobileNo
    }
    return axios.post(Url+"api/v1/Customers",requestData);

}



const RegistrationService={
Create
}

export default RegistrationService;