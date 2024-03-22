import {ExpressUrl, Url} from "../../config/Configuration";
import axios from "axios";
const Save=(data)=>{
alert(data)
    return axios.post(ExpressUrl+"api/customers",data);

}



const StateService={
    Save
}

export default StateService;