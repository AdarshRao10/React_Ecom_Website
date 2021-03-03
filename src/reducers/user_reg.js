import {ERROR, USER_REGISTER,LOGIN_USER, LOGGED_USER} from "../action/user.type";
//import userRegAction from "../action/user_reg";

const INITIAL_STATE = () =>{
    let user = JSON.parse(localStorage.getItem('currentuser'));
    return user? user:{};
}

export const userRegReducer = (state=null,action) =>{
    switch(action.type){
        case USER_REGISTER:
            return {message: action.payload};
        case ERROR:
            return {error: action.payload};
        default :
            return state;
    }
}

export const userLoginReducer = (state=INITIAL_STATE(),action) =>{
    switch(action.type){
        case LOGIN_USER:
            return {message: action.payload};
         case LOGGED_USER:
                return {currentuserdata: action.payload};        
        // case ERROR:
        //     return {error: action.payload};
        default :
            return state;
    }
}