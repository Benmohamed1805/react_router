import React from 'react';
import { Link, Route } from 'react-router-dom';

const AdminArea = (props) => {
    
    return ( 

        <div>
            <p>You must log in to view the page at /admin</p>
            <Link to='/admin'><button >Log in</button></Link>
           
        </div>
     );
}
 

export default AdminArea;