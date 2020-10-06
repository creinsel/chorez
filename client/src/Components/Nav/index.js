import React from "react";
import Button from 'react-bootstrap/Button';



const Nav = () => {

 
 
    return (
        <>
        
      <nav className="navbar sticky-top navbar-expand-lg bg-danger navSt">
      <div className="logo">
          <h3 className="gfont">Chorez</h3>
        </div>
     
    
      <div className="collapse navbar-collapse nav-menu mr-auto justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Button>Login</Button>
          </li>
          <li className="nav-item">
            <Button>Register</Button>
          </li>
        </ul>
        
      </div>
    </nav>
    </>
    
       
     
    );
  };
  
  export default Nav;
