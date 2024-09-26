import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import State from './State';

function Navbar() {
    const [currentRoute, setCurrentRoute] = useState();

    useEffect(()=>{
        const path = window.location.pathname.toLocaleLowerCase();
        setCurrentRoute(path.slice(1,path.length));
      
        
    },[])
  return (
    <div>

    
        <div className="container">
         <nav className='m-2 p-2 border border-info'>   
          <ul className="nav na-pills">
            <li >
              <Link to="/home" onClick={()=>setCurrentRoute("home")} className={currentRoute === "home"? 'btn btn-info ms-1':'btn btn-outline-info ms-1'}>home</Link>
            </li>
            <li>
              <Link to="/products" onClick={()=>setCurrentRoute("products")} className={currentRoute === "products"? 'btn btn-info ms-1':'btn btn-outline-info ms-1'}>Product</Link>
            </li>
            <li>
              <Link to="/save" onClick={()=>setCurrentRoute("save")} className={currentRoute === "save"? 'btn btn-info ms-1':'btn btn-outline-info ms-1'}>Ajouter</Link>
            </li>
          </ul>
          <State/>
         </nav>
        </div>
    
    </div>
  )
}

export default Navbar