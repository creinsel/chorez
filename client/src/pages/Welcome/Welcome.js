  import React from "react";
  import Description from  '../../Components/Description';
  import Disclaimer from  '../../Components/Disclaimer';
  import Register from '../../Components/Register';
  import Login from '../../Components/Login';

const Welcome = () =>{
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