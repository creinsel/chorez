  import React, { useState } from "react";
  import Description from  '../../Components/Description';
  import Disclaimer from  '../../Components/Disclaimer';
  import Register from '../../Components/Register';
  import Login from '../../Components/Login';

const Welcome = () =>{

  const [reg, setReg]= useState(false);
  const [log, setLog]= useState(false);
  const [wel, setWel]= useState(true);

    return(
        <>
        <Description/>
        <Disclaimer/>
        <Register/>
        <Login/>
        </>
    )
}

export default Welcome;