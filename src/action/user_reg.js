import {USER_REGISTER,ERROR,LOGIN_USER,LOGGED_USER,LOGOUT,GET_CART} from "../action/user.type";
import {userReg} from "../api/user_reg";
import {userLogin,userLoggedin,get_cart} from "../api/user_reg";
import {history} from "../shared/helper/history";

//action me data ayega wo humko api folder 
//me jo user_reg file hai usko as parameter bhejna hai. 

export const userRegAction = (data)=>
{
    return async(dispatch)=>{
        try
        {
            let response = await userReg(data);
            console.log(response.data);
            dispatch({type:USER_REGISTER,payload: response.data.data});
            alert("thanks for registeration");
            history.push('/login');
            window.location.reload();
        }
        catch(error)
        {
            console.log(error.response);
            dispatch({type:ERROR,payload: error.response.data.message});
        }
    }
}

// for login
export const userLoginAction = (data)=>
{
    return async(dispatch)=>{
        try
        {
            let response = await userLogin(data);
            localStorage.setItem("currentuser",JSON.stringify(response.data.token));
           // console.log(response.data);
            dispatch({type:LOGIN_USER,payload: response.data.data});
            alert("thanks for login");
            history.push('/home');
            window.location.reload();
            
        }
        catch(error)
        {
            console.log(error.response);
            dispatch({type:ERROR,payload: error.response.data.message})
           
        }
    }
}

export const userLogged = ()=>
{
    return async(dispatch)=>{
        try
                {
                   
                    let response = await userLoggedin();//api will return data
                    console.log(response.data);
                    dispatch({type:LOGGED_USER, payload: response.data});
                                
                }
                catch(error)
                {
                    //console.log(error.response);
                    dispatch({type:ERROR,payload: error.response});
                }
    }
}



export const logout = () => {
    return async dispatch => {
        localStorage.removeItem('currentuser');
        dispatch({type:LOGOUT});
        history.push("/login");
        window.location.reload();
    }
}

