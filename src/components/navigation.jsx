import React, {Component} from "react";
import {Navbar,Nav,Form} from "react-bootstrap";
import {Link} from "react-router-dom";//used for routing between webpages
import {userLogged,logout} from "../action/user_reg";
import {connect} from "react-redux";
import {navigateToCart} from "../action/product"

class Navigation extends Component {

  componentDidMount(){
    let token = JSON.parse(localStorage.getItem('currentuser'));
    if(token)
    {
      //if token exist then authenticate this token and get user details for that call loggedin api
      this.props.userLogged();
    }
  }

    render(){
        return(
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
    </Nav>

    {
       this.props.loggedinuser?
       <Nav inline="true">
         <Form inline>
         <h5 className="text-white">Hello,{this.props.loggedinuser.user.firstname} {this.props.loggedinuser.user.lastname}&nbsp;&nbsp;</h5>
        <button type="button" className="btn btn-primary" onClick={()=>this.props.navigateToCart()}>
           <i className="fa fa-cart-plus fa-2x" aria-hidden="true"></i>
           {console.log(this.props.cartData)}
           {/* {
             this.props.cartData.message.data.cartItems.length > 0
             ?
             <span classname="badge badge-light">
               {this.props.cartData.message.data.cartItems.length}
             </span>
             :
             null
           } */}
         </button>
         <Nav.Link className="text-white" onClick={()=>this.props.logout()}>Logout</Nav.Link>
         </Form>  
       </Nav>
       :
       <Form inline>
       <Nav className="mr-auto">
       <Nav.Link as={Link} to="/register">Register</Nav.Link>
       <Nav.Link as={Link} to="/login">Login</Nav.Link>
       </Nav>
       </Form>
    }

   

  </Navbar>
            
              
        )
    }
}

const mapStateToProps = (state)=>{
  console.log(state);
  return {loggedinuser:state.login.currentuserdata,cartData:state.cart};
 
}


export default connect(mapStateToProps,{userLogged,logout,navigateToCart})(Navigation);