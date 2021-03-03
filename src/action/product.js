import {FETCH_ALL_PRODUCT,SHOW_ERROR,PRODUCT_DATA_BY_ID,LOADING,ADD_CART,REMOVE_CART, ADD_QUANTITY,NAVIGATE_CART,GET_CART} from "../action/product.type";
import {getProducts,getProductsById,getProductInCart,addQuantInCart,Remove_cart,get_cart} from "../api/product";
import {history} from "../shared/helper/history";
//action me data ayega wo humko api folder 
//me jo user_reg file hai usko as parameter bhejna hai. 

export const getProductAction = ()=>
{
    return async(dispatch)=>{
        try
        {
            let response = await getProducts();
            console.log(response.data);
            dispatch({type:FETCH_ALL_PRODUCT,payload: response.data});
            
        }
        catch(error)
        {
            //console.log(error.response);
            dispatch({type:SHOW_ERROR,payload: error.response});
        }
    }
}

export const getProductId = (id)=>
{
    return async(dispatch)=>{
        try
        {
            let response = await getProductsById(id);
            console.log(response.data);
            dispatch({type:PRODUCT_DATA_BY_ID,payload: response.data});
            
        }
        catch(error)
        {
            //console.log(error.response);
            dispatch({type:SHOW_ERROR,payload: error.response});
        }
    }
}

export const addtoCart = (data)=>
{
    return async(dispatch)=>{
        try
                {
                    dispatch({type:LOADING});
                    let response = await getProductInCart(data);//api will return data
                    setTimeout(()=>{dispatch({type:ADD_CART,payload: response.data});},1000);
                                
                }
                catch(error)
                {
                    //console.log(error.response);
                    dispatch({type:SHOW_ERROR,payload: error.response});
                }
    }
}

export const addQuantity = (data)=>
{
    return async(dispatch)=>{
        try
                {
                    dispatch({type:LOADING});
                    let response = await addQuantInCart(data);//api will return data
                    setTimeout(()=>{dispatch({type:ADD_QUANTITY,payload:response.data});},1000);
                                
                }
                catch(error)
                {
                    //console.log(error.response);
                    dispatch({type:SHOW_ERROR,payload: error.response});
                }
    }
}

export const removeCart = (data)=>
{
    console.log(data);
    return async(dispatch)=>{
        try
                {
                    dispatch({type:LOADING});
                    let response =await Remove_cart(data);//api will return data
                    console.log(response);
                   // setTimeout(()=>{dispatch({type:REMOVE_CART,payload: response.data});},1000);
                                
                }
                catch(error)
                {
                    //console.log(error.response);
                    dispatch({type:SHOW_ERROR,payload: error.response});
                }
    }
}

export const navigateToCart = () => {
    return async dispatch => {
        dispatch({type:NAVIGATE_CART});
        history.push("/cart");
        window.location.reload();
    }
}

export const getusercart = (data)=>
{
    return async(dispatch)=>{
        try
        {
            console.log(data);
            let response = await get_cart(data);//api will return data
            console.log(response.data);
            dispatch({type:GET_CART, payload: response.data});
        }
        catch(error)
        {
            console.log(error);
            dispatch({type:SHOW_ERROR,payload: error.response});
           
        }
    }
}



// export const removetoCart = (objId,item)=>
// {
//     return async(dispatch)=>{
//         try
//         {
//             let response = Remove_cart(objId,item);//api will return data
//             dispatch({type:REMOVE_CART,payload: response.data});
                        
//         }
//         catch(error)
//         {
//             //console.log(error.response);
//             dispatch({type:ERROR,payload: error.response});
//         }
//     }
// }

// export const addtoCart = (id)=>
// {
//     return async(dispatch)=>{
//         try
//         {
//             dispatch({type:LOADING});
//             let response = await getProductsById(id);//api will return data
//             setTimeout(()=>{dispatch({type:ADD_CART,payload: response.data});},1000);
                        
//         }
//         catch(error)
//         {
//             //console.log(error.response);
//             dispatch({type:SHOW_ERROR,payload: error.response});
//         }
//     }
// }

// export const removetoCart = (id)=>
// {
//     return async(dispatch)=>{
//         try
//         {
//             dispatch({type:LOADING});
//             let response = await getProductsById(id);//api will return data
//             setTimeout(()=>{dispatch({type:REMOVE_CART,payload: response.data});},1000);
                        
//         }
//         catch(error)
//         {
//             //console.log(error.response);
//             dispatch({type:SHOW_ERROR,payload: error.response});
//         }
//     }
// }

// export const addQuantity = (data)=>
// {
//     return async(dispatch)=>{
//         try
//         {
//             dispatch({type:LOADING});
//             //no need to call Api
//             dispatch({type:ADD_QUANTITY,payload:data});
                        
//         }
//         catch(error)
//         {
//             //console.log(error.response);
//             dispatch({type:SHOW_ERROR,payload: error});
//         }
//     }
// }

// export const removeQuantity = (data)=>
// {
//     return async(dispatch)=>{
//         try
//         {
//             dispatch({type:LOADING});
//             //no need to call Api
//             dispatch({type:REMOAVE_QUANTITY,payload:data});
                        
//         }
//         catch(error)
//         {
//             //console.log(error.response);
//             dispatch({type:SHOW_ERROR,payload: error});
//         }
//     }
// }