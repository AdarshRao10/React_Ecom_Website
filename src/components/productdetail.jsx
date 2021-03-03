import React, {Component} from "react";
import {Card,Button,CardDeck, Container} from "react-bootstrap";
import {history} from "../shared/helper/history";
import {getProductId,addtoCart} from "../action/product";
import {connect} from "react-redux";
var Arr1 = new Array();
var Arr2 = new Array();



class shopProductdetails extends Component {
    constructor(props){
        super(props);
     
       };

    componentDidMount(){
       this.props.getProductId(this.props.match.params.id); 
    }

    addcart = (id) =>{
    let email_id = this.props.login.currentuserdata.user.userlogin.emailId;

      if(Arr1.length===0)
      {
        Arr1.push(id);
        Arr2.push(1);
      const item = {
        userEmail:email_id,
        cartItems:Arr1,
        quantity:Arr2
       };
       console.log(item);
      this.props.addtoCart(item);
      this.props.history.push('/cart');
      }
      else if(!Arr1.includes(id)){
        Arr1.push(id);
        Arr2.push(1);
      const item = {
        userEmail:email_id,
        cartItems:Arr1,
        quantity:Arr2
       };
       console.log(item);
      this.props.addtoCart(item);
      this.props.history.push('/cart');
      }
      else 
      {
        for (var i = 0; i < Arr1.length; i++) 
        {
            
          if(id===Arr1[i])
            {
              Arr2[i]=Arr2[i]+1;
            }            
        }
         const item = {
          userEmail:email_id,
          cartItems:Arr1,
          quantity:Arr2
               };
               console.log(item);
              this.props.addtoCart(item);
              this.props.history.push('/cart');

      
      }
    
      // Arr1.push(id);
      // Arr2.push(1);
      // const item = {
      //   cartItems:Arr1,
      //   quantity:Arr2
      //  };
      //  console.log(item);
      // this.props.addtoCart(item);
      // this.props.history.push('/cart');
    }

   

    
    
    render(){

        //function for currency
    const formatCurrency = (value)=>{
        return new Intl.NumberFormat('en-US',{style:'currency',currency:'INR',currencyDisplay:'narrowSymbol'})
        .format(value)
       };
   
        if(!this.props.currentProduct.message)
        {
            return <h3>LOADING....</h3>
        }
        return(
        <div className="col-md-4 mt-2">    
        <Card style={{ width: '55rem',display:"flex",flexDirection:"row"}}>
         <Card.Img variant="top" src={this.props.currentProduct.message.data.image} style={{ width: '286px',height: '180px'}} />
          <Card.Body>
            <Card.Title>{this.props.currentProduct.message.data.name}</Card.Title>
            <Card.Text>{this.props.currentProduct.message.data.description}</Card.Text>
            <Card.Text>Price: {formatCurrency(this.props.currentProduct.message.data.price)}</Card.Text>
            <Card.Text>Offer Price: {formatCurrency(this.props.currentProduct.message.data.offerprice)}</Card.Text>
            <Card.Text>category: {this.props.currentProduct.message.data.category.categoryName}</Card.Text>
            <Card.Text>subcategory: {this.props.currentProduct.message.data.subcategory.name}</Card.Text>
            <Button variant="primary" onClick={()=>this.addcart(this.props.currentProduct.message.data._id)}>Add to cart</Button>
          </Card.Body>
        </Card>
        </div> 
 )

    }
       

    
}

const mapStateToProps = (state)=>{
    console.log(state);
    return state;
   
  }

 

export default connect(mapStateToProps,{getProductId,addtoCart})(shopProductdetails);