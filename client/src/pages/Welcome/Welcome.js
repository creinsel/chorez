  import React, { useState } from "react";
  import Description from  '../../Components/Description';
  import Disclaimer from  '../../Components/Disclaimer';
  import Register from '../../Components/Register';
  import Login from '../../Components/Login';
  import Nav from './Components/Nav';

const Welcome = () =>{

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

    return(
        <>
        <Nav/>
        <Description/>
        <Disclaimer/>
        <Register/>
        <Login/>
        </>
    )
}

export default Welcome;