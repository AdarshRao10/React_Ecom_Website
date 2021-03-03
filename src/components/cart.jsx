import React, {Component} from "react";
import {connect} from "react-redux";
import {Card,Button,CardDeck, Container} from "react-bootstrap";
import {addQuantity,removeCart,addtoCart} from "../action/product";
import {finalCartId} from  "../api/product";
var Arr1 = new Array();
var Arr2 = new Array();

class cart extends Component{
 
    

  

//    addquantity(objId,prodId,quant){
//        console.log(objId);
//        console.log(prodId);
//       var new_quant=quant+1;
//        console.log(new_quant);
//        const item = {
//            productId:prodId,
//            quantity:new_quant
//        };
//        console.log(item);
//         finalCartId(objId);
//         setTimeout(()=>{this.props.addQuantity(item);},1000);      
//    }

addquantity(prodId,quant,term){
    let email_id = this.props.login.currentuserdata.user.userlogin.emailId;
    console.log(this.props.cart.message.data.cartItems.length);
    for (var i = 0; i < this.props.cart.message.data.cartItems.length; i++) 
    {
      //for loop
    if(this.props.cart.message.data.cartItems[i].prodId === prodId)
    {
        if(term===1)
        {
            this.props.cart.message.data.cartItems[i].quantity = quant+1;
        }
        else{
            this.props.cart.message.data.cartItems[i].quantity = quant-1;
        }
    }
    }
    
    
    
    
    for (var i = 0; i < this.props.cart.message.data.cartItems.length; i++) 
 {
    Arr1.push(this.props.cart.message.data.cartItems[i].prodId);
    Arr2.push(this.props.cart.message.data.cartItems[i].quantity);
 }
    //for loop
    
    const item = {
        userEmail:email_id,
        cartItems:Arr1,
        quantity:Arr2
             };
             console.log(item);
            this.props.addtoCart(item);
        
}

//    removequantity(objId,prodId,quant){
//     console.log(objId);
//     console.log(prodId);
//    var new_quant=quant-1;
//     console.log(new_quant);
//     const item = {
//         productId:prodId,
//         quantity:new_quant
//     };
//     console.log(item);
//      finalCartId(objId);
//      setTimeout(()=>{this.props.addQuantity(item);},1000);      
// }



removecart(objId,prodId){
    console.log(objId);
    console.log(prodId);
    finalCartId(objId);
    const item = {
        productId:prodId
    };
     console.log(item);
    // setTimeout(()=>{this.props.removeCart(item);},1000); 
    this.props.removeCart(item);     
}


    
    render(){
        const formatCurrency = (value)=>{
            return new Intl.NumberFormat('en-US',{style:'currency',currency:'INR',currencyDisplay:'narrowSymbol'})
            .format(value)
           };

           if(!this.props.cart.message)
           {
               return <h3>LOADING....</h3>
           }

        //    if(this.props.cart.message.data.cartItems.length <=0)
        //    {
        //        return <h3>Cart empty!!!</h3>
        //    }
       
           
        return(          

            <div className="container">
              <h2>Cart items</h2>
            <div className="column"> 
            {
            this.props.cart.message.data.cartItems.map((item)=>(
            <div className="col-md-4 mt-2"  key={item._id} >    
        <Card style={{ width: '55rem',display:"flex",flexDirection:"row"}}>
         <Card.Img variant="top" src={item.image} style={{ width: '286px',height: '180px'}} />
          <Card.Body>
            <Card.Title>name: {item.name}</Card.Title>
            <Card.Text>Offer Price: {formatCurrency(item.offerprice)}</Card.Text>
            <div className="row">&nbsp;&nbsp;&nbsp;&nbsp;
            <Card.Text>Quantity:&nbsp;</Card.Text>  
            {/* <span class="align-middle"><i class="fa fa-plus-square-o" aria-hidden="true" onClick={()=>this.addquantity(this.props.cart.message.data._id,item.prodId,item.quantity)}></i></span> */}
            <span class="align-middle"><i class="fa fa-plus-square-o" aria-hidden="true" onClick={()=>this.addquantity(item.prodId,item.quantity,1)}></i></span>
            <Card.Text>&nbsp;{item.quantity}&nbsp;</Card.Text>   
            {/* <span class="align-middle"><i class="fa fa-minus-square-o" aria-hidden="true" onClick={()=>this.removequantity(this.props.cart.message.data._id,item.prodId,item.quantity)}></i></span> */}
            <span class="align-middle"><i class="fa fa-minus-square-o" aria-hidden="true" onClick={()=>this.addquantity(item.prodId,item.quantity,0)}></i></span>
            </div>
            {/* <Card.Text>quantity: {item.quantity}</Card.Text> */}
            <Button variant="primary" onClick={()=>this.removecart(this.props.cart.message.data._id,item.prodId)}>Remove Product</Button>
          </Card.Body>
        </Card>
        </div> 
        ))
    }
    </div>
    <div className="col-md-4 mt-2">
        <h3>Grand total: {this.props.cart.message.data.grandtotal}</h3>
    </div>
    </div>
        )
              
        
    }   
}

const mapStateToProps= (state)=>{
    console.log(state);
    return state;
}

export default connect(mapStateToProps,{addQuantity,removeCart,addtoCart})(cart);