  import React, { useState } from "react";
  import Description from  '../../Components/Description';
  import Disclaimer from  '../../Components/Disclaimer';
  import Register from '../../Components/Register';
  import Login from '../../Components/Login';
  import Nav from '../../Components/Nav';

const Welcome = () =>{

    return(
        <>
        <Nav/>
        {wel?
        <div>
         <Description/>
        <Disclaimer/>
        </div>
        :<div></div>
      }
       
        <Register/>
        <Login/>
        </>
    )
}

export default Welcome;