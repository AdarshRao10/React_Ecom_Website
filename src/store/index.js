import {combineReducers} from "redux";
import {userRegReducer} from "../reducers/user_reg";
import {userLoginReducer} from "../reducers/user_reg";
import {ProductReducer} from "../reducers/product";
import {ProductIdReducer} from "../reducers/product";
import {addtoCart} from "../reducers/product";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({register: userRegReducer,login:userLoginReducer,
    productItems:ProductReducer,currentProduct:ProductIdReducer,cart:addtoCart});

export default reducers;

export const persistConfig = {
    key:"root",
    storage,
    whitelist:['cart']
};