import axios from "axios";
import {Header} from "../header/header";

let user_reg_url = "http://localhost:4800/api/register";
let user_login_url="http://localhost:4800/api/auth";
let LOGGEDIN_USER_ENDPOINT = "http://localhost:4800/api/me";

let config = {
    headers:{
        "content-type":"application/json"
    }
}
//jab action folder ke user_reg file se data as parameter yaha ayega tab 
//usko axios function me as parameter bhejo so axios data ko json me covert karke api ko data dega.
export const userReg = (data) => {
    return axios.post(user_reg_url,JSON.stringify(data),config);
}

//for login
export const userLogin = (data) => {
    return axios.post(user_login_url,JSON.stringify(data),config);
}

export const userLoggedin= async() => {       
    return  axios.get(LOGGEDIN_USER_ENDPOINT,{headers:Header(),config});
    
}

