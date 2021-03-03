import React, {Component} from "react";
import {Card,Button,CardDeck, Container} from "react-bootstrap";
import {history} from "../shared/helper/history"

const Product = (props)=>{
    let {datas}=props;
    console.log(datas);
    //function for currency
    const formatCurrency = (value)=>{
     return new Intl.NumberFormat('en-US',{style:'currency',currency:'INR',currencyDisplay:'narrowSymbol'})
     .format(value)
    };

    //for making description short
    const formatDescription=(value)=>{
        if(!value){return null;}
        return value.substring(1,15)+"....";
    }
    return(
        
        <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={datas.image} style={{ width: '286px',height: '180px'}} />
  <Card.Body>
    <Card.Title>{datas.name}</Card.Title>
    <Card.Text>{formatDescription(datas.description)}</Card.Text>
    <Card.Text>Price: {formatCurrency(datas.price)}</Card.Text>
    {/* ye button click honepe url address kya hoga wo onlick function me define kiya hoga */}
    <Button variant="primary" onClick={() => props.history.push(`/shopproduct/${datas._id}`)}>View product</Button>
  </Card.Body>
</Card> 
       

    )
}

 

export default Product;