import React from 'react';

export default function Product(props){
    return(
        <div>
           <p>imageurl:{props.image}</p> 
           <p>productName:{props.productname}</p> 
           <p>price:{props.price}</p> 
        </div>
    )
}