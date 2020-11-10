import React, { useState } from "react";
import Button from 'react-bootstrap/Button';



const Nav = () => {

  const [reg, setReg]= useState(false);
  const [log, setLog]= useState(false);
  const [wel, setWel]= useState(true);

  const showReg = () =>{
    setReg(true);
    setLog(false);
    setWel(false);
  };

  const showLog = () =>{
    setReg(false);
    setLog(true);
    setWel(false);
  };
 
  const showWel = () =>{
    setReg(false);
    setLog(false);
    setWel(true);
  };
 
    return (
        <>
        
      <nav className="navbar sticky-top navbar-expand-lg bg-danger navSt">
      <div className="logo">
          <h3 className="gfont" onClick = {showWel}>Chorez</h3>
        </div>
     
    
      <div className="collapse navbar-collapse nav-menu mr-auto justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Button onClick = {showLog}>Login</Button>
          </li>
          <li className="nav-item">
            <Button onClick = {showReg}>Register</Button>
          </li>
        </ul>
        
      </div>
    </nav>
    </>
    
       
     
    );
  };
  
  export default Nav;
