
//redux state
const initialValues={

    customerValues:[],

}

const SignupReducer=(state=initialValues,action)=>{
    switch(action.type){
        case 'SAVE_REGISTRATION' :
            return{

                customerValues: action.payload,

            }
        default: return state;
    }
}

export default  SignupReducer;