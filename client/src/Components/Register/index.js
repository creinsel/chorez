import React, { useState } from "react";
import RegMod from '../RegMod'
import API from '../../utils/API'
// import API from "../../utils/API";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthday: "",
    payAcc: ""
  });


  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(formData);
  };

  const handleClose = () => {
    console.log("clicked")
    console.log({formData})
    const { name, email, password, birthday, payAcc } = formData;

    if (name && email && password && birthday)
      API.saveUser({
        name,
        points: 0,
        email,
        password,
        birthday,
        payAcc,
        act: []
      })
        .then(res => {
          const password = formData.password
          const rounds = 10

          var userId = res.data._id;

          localStorage.setItem("userId", userId);
        })
        .catch(err => console.log(err));
  };

  
  return (
    <>
      <h2 className="text-center">Register</h2>
          <form className= "container">
            <div className="form-group">
              <label for="Name">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label for="Email">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div class="form-group">
              <label for="Password">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div class="form-group">
              <label for="birthday">DOB</label>
              <input
                type="birthday"
                class="form-control"
                placeholder="mm/dd/yy"
                name="birthday"
                value={formData.birthday}
                onChange={handleInputChange}
              />
            </div>
            <div class="form-group">
              <label for="payAcc">Payment</label>
              <input
                type="payment"
                class="form-control"
                placeholder="Payment"
                name="payAcc"
                value={formData.payAcc}
                onChange={handleInputChange}
              />
            </div>
           <div onClick={handleClose}><RegMod/></div> 
          </form>
        
          
       
    </>
  );
};

export default Register;