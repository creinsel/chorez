import React from "react";
import Button from 'react-bootstrap/Button';



const Nav = () => {

 
 
    return (
        <>
        
      <nav className="navbar sticky-top navbar-expand-lg navbar-light navSt">
      <div className="logo">
          

          <h3 className="gfont">Cassondra <br></br> Reinsel</h3>
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
