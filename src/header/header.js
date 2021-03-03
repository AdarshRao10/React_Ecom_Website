//this is given to api bcz for authentication we must specify the token that we got during login.
export const Header = () =>{
    let user = JSON.parse(localStorage.getItem('currentuser'));
    if(user)
    {
        return {'x-auth-token':user};
    }
    else{
        return {};
    }
}