import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

const Description = () =>{
    return(
        <Jumbotron className="space bg-warning">
        <div className= "container">
            <h2>Hello I am the description of this app. I tell you its purpose and how it is used.</h2>
        </div>
        </Jumbotron>
    )
}

export default Description;
