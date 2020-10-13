import React, { useState, useContext } from "react";
import LogMod from "../LogMod";


const Login = () => {
    const [show, setShow] = useState(false);
    // const { setUserId } = useContext(UserIdContext);
    // const { setUsername } = useContext(UsernameContext);
  
    const [formData, setFormData] = useState({
      email: "",
      password: ""
    });
  
    const handleInputChange = event => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
      //console.log(formData);
    };
  
    const handleLogIn = () => {
      setShow(false);
  
    //   API.login(formData).then(result => {
    //     if (result.status === 200) {
    //       setUserId(result.data._id);
    //       setUsername(result.data.name);
    //     }
    //     //react router go to another pages
    //   });
    };
    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);
  
    return (
      <>
       <h2 className= "text-center">Login to Your Account</h2>
  
     
            <form action="/login" method="post" className="container">
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  className="form-control email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  className="form-control password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                />
              </div>
              <LogMod/>
            </form>
          
        
      </>
    );
  };
  
  export default Login;
  