import axios from "axios";


let product_url = "http://localhost:4800/api/showallProducts";
let productId_url = "http://localhost:4800/api/fetchProductById";
let Add_cart_item_url = "http://localhost:4800/api/AddToCart";
let Update_cart_item_url ="http://localhost:4800/api/updateCart";
let Remove_cart_item_url="http://localhost:4800/api/deleteCart";

var Id;


let config = {
    headers:{
        "content-type":"application/json"
    }
}
//jab action folder ke user_reg file se data as parameter yaha ayega tab 
//usko axios function me as parameter bhejo so axios data ko json me covert karke api ko data dega.
export const getProducts = () => {
    return axios.get(product_url,config);
}


export const getProductsById = (id) => {
    return axios.get(`${productId_url}/${id}`,config);
}

export const getProductInCart = (data) => {
    console.log(data);
    return axios.post(Add_cart_item_url,JSON.stringify(data),config);
}

// export const Remove_cart= (objId,item) => {
//     //console.log(item);
//     const value = axios.delete(`${Remove_cart_item_url}/${objId}`,JSON.stringify(item),config);
//     console.log(value);
// }

export const finalCartId = (data) =>{
     Id = data;
    console.log(Id);
}

export const addQuantInCart = (data) => {
    console.log(Id);
    return axios.put("http://localhost:4800/api/updateCart/"+Id,JSON.stringify(data),config);
}

export const Remove_cart= async(data) => {
        console.log(Id);
        //let res = "http://localhost:4800/api/deleteCart/"+Id;
        try{
            let url = `${Remove_cart_item_url}/${Id}`;
            console.log(url);
            let value = await  axios.delete(url,JSON.stringify(data),config);     
            console.log(value); 
        }
      catch(error)
      {
          console.log(error);
      }
       
        
    }

    export const get_cart= async(data) => {       
        let a = JSON.stringify(data);
        return await axios.get("http://localhost:4800/api/getUserCart",a,config);
        
    }    


