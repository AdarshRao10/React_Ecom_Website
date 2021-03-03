import React, {Component, component} from "react";
import Navigation from "./components/navigation";
import {Switch,Route} from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import shopProductdetails from "./components/productdetail";
import cart from "./components/cart";


class App extends Component {
    render(){
        return(
            <React.Fragment>
                <Navigation/>
                <Switch>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/shopproduct/:id" exact component={shopProductdetails}/>
                    <Route path="/cart" exact component={cart}/>
                </Switch>
            </React.Fragment>            
        )
    }
}

export default App;