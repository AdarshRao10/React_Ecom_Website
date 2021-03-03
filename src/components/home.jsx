import React, {Component} from "react";
import {connect} from "react-redux";
import {getProductAction} from "../action/product";
import Product from "../components/product";
import {Container,Row} from "react-bootstrap";


class Home extends Component {

    constructor(){
        super();
     
       };

    componentDidMount(){
        this.props.getProductAction();
    }   
       
    render(){ 
        if(!this.props.productItems.message)
        {
            return <h3>LOADING....</h3>
        }
        return(
            <div className="container">
              <h2>All Products</h2>
            <div className="row"> 
            {
                this.props.productItems.message.data.map((item)=>(               
                   <div className="col-md-4 mt-2" key={item._id} style={{display:"flex"}}>
                       <Product datas={item}{...this.props} />
                   </div>))   
            }   
            </div>   
            </div>    
        )}
}

const mapStateToProps = (state)=>{
    console.log(state);
    return state;
  }


export default connect(mapStateToProps,{getProductAction})(Home);