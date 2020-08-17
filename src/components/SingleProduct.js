import React from 'react';
const SingleProduct = (props) => {
    const produit=props.prod.find(el=>el.id===Number(props.match.params.productId))
    return ( 
        <div>
            <h1>{produit.name}</h1>
            <h2>{produit.description}</h2>
            <h3>{produit.status}</h3>
        </div>
     );
}
 
export default SingleProduct;