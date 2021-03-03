import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BrowserRouter} from "react-router-dom";
//jab app component ko BrowserRouter router ke andhar rakha tabhi "You should not use <Link> outside a <Router>" ye problem solve hua.
import reducers from "./store/index";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import {Provider} from "react-redux";
import "../node_modules/font-awesome/css/font-awesome.css";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore,persistReducer} from "redux-persist";
import {persistConfig} from "./store/index";

const persistReducers = persistReducer(persistConfig,reducers);
let store = createStore(persistReducers,applyMiddleware(thunk));

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
        <PersistGate PersistGate loading={<h1>LOADING...</h1>} persistor={persistStore(store)}>
           <App/>  
        </PersistGate>
        </BrowserRouter>
    </Provider>,
    //now call the root component , this code will render inside root component
    document.getElementById("root")
)