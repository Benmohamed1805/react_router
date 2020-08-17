import React from 'react';
import {Link,Route} from 'react-router-dom';
import SingleProduct from './SingleProduct'

const Products = (props) => {
  const products =[{
      id:1,
      name:"NIKE Liteforce Blue Sneakers",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status :"available"
    },{
        id:2,
        name:"U.S. POLO ASSN. Slippers",
      description: "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor",
      status :"available"
    }]
   return (
      <>
      <div>
  {products.map(el=><p><Link to={`${props.match.url}/${el.id}`}>{el.name}</Link></p>)}
  </div>
  <Route path ={`${props.match.path}/:productId`}render={(props)=><SingleProduct prod={products}{...props}/>}/>
     
   </> );
}
 
export default Products;
