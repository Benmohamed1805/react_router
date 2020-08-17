import React from 'react';
import { Link, Route,Switch, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Category from './components/Category';
import Products from './components/Products';
import AdminArea from './components/AdminArea';
import logo from './logo.svg';

function App({ match }) {
  return (
    <nav>

      <Router>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/category'>Category</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/adminarea'>AdminArea</Link>
          </li>


  </ul>

      <div>

            <Route  path="/home" component={Home} />
            <Route path="/category" component={Category} />
            <Route path="/products" component={Products} />
            <Route path="/adminArea" component={AdminArea} />
           <Route path="/admin" render={()=><h1>Welcome admin</h1>}/>
       
         </div>
         </Router>
      
    </nav>
  );
}

export default App;
