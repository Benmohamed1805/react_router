import React from 'react';
import { Link, Route,Switch, BrowserRouter as Router } from "react-router-dom";
import Shoes from './Shoes'

const Category = ({ match }) => {
    return (
        <div>
            <h1>Category</h1>
            <ul>
                <li>
                    <Link to={`${match.url}/shoes`}>Shoes</Link>
                </li>
                <li>
                    <Link to={`${match.url}/boots`}>Boots</Link>
                </li>
                <li>
                    <Link to={`${match.url}/footwear`}>Footwear</Link>
                </li>
           
            <Route path={`${match.path}/shoes`} render={() => <h1>Shoes</h1>}/>
            <Route path={`${match.path}/boots`} render={() => <h1>Boots</h1>}/>
            <Route path={`${match.path}/footwear`} render={() => <h1>Footwear</h1>}/>
            </ul>
           

</div>       
 );
    }
export default Category        