import React, {Component} from "react";
import {Form,Button} from "react-bootstrap";
import simple_validator from "simple-react-validator";
import {connect} from "react-redux";
import {userRegAction} from "../action/user_reg"
// import Link from "react-router-dom";//used for routing between webpages


class Home extends Component {
    constructor(){
     super();
     this.state={
         firstname:"",
         lastname:"",
         emailId:"",
         password:"",
         termsAcceptcheck: 0
         //initially ek state obj create kiya aur uske sare variables filhal null hai.
         
     }
    // this.validator = new simple_validator();
    };

    //to update data in input field
   inputhandledata = (event)=>{
      this.setState({[event.target.name]:event.target.value});
     
   };

   //jab submit button click hoga
   formhandlesubmit=(e)=>{
       e.preventDefault();
       const item = {
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        userlogin:{
          emailId:this.state.emailId,
          password:this.state.password
        },
        termsAcceptcheck:this.state.termsAcceptcheck
       };
       console.log(item);
       this.props.userRegAction(item);
       this.setState(
        {firstname:"",
        lastname:"",
        emailId:"",
        password:"",
        termsAcceptcheck:0
       });
   };

   submitForm(){
    // if (this.validator.allValid()) {
    //   alert('You submitted the form and stuff!');
    // } else {
    //   //this.validator.showMessages();
    //   // rerender to show messages for the first time
    //   // you can use the autoForceUpdate option to do this automatically`
    //   this.forceUpdate();
    // }
    // if (this.validator.fieldValid('firstname')) {
    //   console.log("first name is valid");
    // }
    // else{
    //   console.log("first name is invalid");
    // }
  }

    render(){
        return(
            <Form onSubmit={this.formhandlesubmit}>
                <Form.Group controlId="formBasicEmail">
              <Form.Label>first name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" 
              name="firstname" value={this.state.firstname}//intial value of firstname is null so waha kuch nahi ayega 
              onChange={this.inputhandledata}//jab input ayega tab hum inputdatahandle iss function me jake data update karenge.
               />
               {/* {this.validator.message("firstname",this.state.firstname,"required")} */}
            </Form.Group>
            
            
                <Form.Group controlId="formBasicEmail">
              <Form.Label>last name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name"  name="lastname" value={this.state.lastname} 
              onChange={this.inputhandledata}/>
            </Form.Group>

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
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" name="termsAcceptcheck"
               checked={this.state.termsAcceptcheck} onChange={e=> this.setState({termsAcceptcheck:true})} 
               />
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



//export default connect({mapStateToProps},{userRegAction})(Home);
//Please try, passing mapStateToProps and userRegAction as arguments instead of an object.
//connect is a function expecting state and dispatch functions.
export default connect(mapStateToProps,{userRegAction})(Home);