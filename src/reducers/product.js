import { addQuantity } from "../action/product";
import {FETCH_ALL_PRODUCT,SHOW_ERROR,PRODUCT_DATA_BY_ID, LOADING, ADD_CART,REMOVE_CART, ADD_QUANTITY,NAVIGATE_CART,GET_CART} from "../action/product.type";

export const ProductReducer = (state=[],action) =>{
    switch(action.type){
        case FETCH_ALL_PRODUCT:
            return {message: action.payload};
        case SHOW_ERROR:
            return {error: action.payload};
        default :
            return state;
    }
}

export const ProductIdReducer = (state={},action) =>{
    switch(action.type){
        case PRODUCT_DATA_BY_ID:
            return {message: action.payload};
        case SHOW_ERROR:
            return {error: action.payload};
        default :
            return state;
    }
}



export const addtoCart = (state={},action) =>{
    switch(action.type){
        // case LOADING:
        //     return{...state,loading:true};
        case ADD_CART:
             return{message:action.payload};
        case NAVIGATE_CART:
            return{...state};
         case ADD_QUANTITY:
             return {message:action.payload};
        case GET_CART:
                console.log(action.payload);    
         case REMOVE_CART:
             return {message:action.payload};
        default :
            return state;
    }
}



// export const Removecart = (state,action)=>
//  {
//     switch(action.type){
//     case REMOVE_CART:
//         return{message:action.payload};
//      default :
//         return state;
//     }
//  }



// const INITIAL_STATE = {
//     storedata:[]
// }

// export const addtoCart = (state=INITIAL_STATE,action)=>
// {
//     switch(action.type){
//         case LOADING:
//             return{...state,loading:true};
        
//         case ADD_CART:
//             return{...state,storedata:cartUtility(state.storedata,action.payload),loading:false};
            
//         case REMOVE_CART:
//             return{...state,storedata:state.storedata.filter(data=>data.products._id!== action.payload._id),loading:false};
            
//         case ADD_QUANTITY:
//             return{...state,loading:false,addquantity:addQuantityUtility(state.storedata,action.payload)};

//         case REMOVE_QUANTITY:
//             return{...state,loading:false,addquantity:removeQuantityUtility(state.storedata,action.payload)}; 
            
//         default:
//             return state;    
//     }
// }