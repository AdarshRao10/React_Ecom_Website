import React, {Component} from "react";
import {Form,Button,div} from "react-bootstrap";
import {userLoginAction} from "../action/user_reg";
import {connect} from "react-redux";
import {getusercart} from "../action/product";

class login extends Component {
    constructor(){
        super();
        this.state={
            emailId:"",
            password:""
            //initially ek state obj create kiya aur uske sare variables filhal null hai.            
        }
       };

       //to update data in input field
   inputhandledata = (event)=>{
    this.setState({[event.target.name]:event.target.value});
   
 };

 //jab submit button click hoga
 formhandlesubmit=(e)=>{
    e.preventDefault();
    const item = {
     userlogin:{
       emailId:this.state.emailId,
       password:this.state.password
     }
    };
 
    console.log(item.userlogin.emailId);
     this.props.getusercart(item.userlogin);
    // //setTimeout(()=>{this.props.userLoginAction(item);},1000);
    // console.log(item);
    // this.props.userLoginAction(item);
    // this.setState(
    //  {
    //  emailId:"",
    //  password:""   
    // });
};

    render(){
        return(
         

        <Form onSubmit={this.formhandlesubmit}>
        

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  name="emailId" value={this.state.emailId} 
          onChange={this.inputhandledata}/>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  name="password" value={this.state.password} 
          onChange={this.inputhandledata}/>
        </Form.Group>
       
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>                  
        )
    }
}




const mapStateToProps = (state)=>{
    console.log(state);
    return state;
  }

 

  export default connect(mapStateToProps,{userLoginAction,getusercart})(login);