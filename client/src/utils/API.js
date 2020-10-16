import axios from "axios";

export default {
  //API calls to db Users

  saveUser: function(formdata) {
    return axios.post("/api/users/", formdata);
  },
  login: function(formdata) {
    // console.log("in the login");
    return axios.post("/api/users/login", formdata);
  },
  //gets user by id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  //updates user by id
  updateUser: function(id, data) {
    return axios.put("/api/users/addpoints/" + id, data);
  },
  performAct: function(id, actData) {
    // console.log("inside api performAct");
    return axios.post("api/users/addact/" + id, actData);
  }
};