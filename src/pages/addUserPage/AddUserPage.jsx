import axios from "axios";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./addUserPage.scss";

const AddUserPage = () => {
  let [user, setUser] = useState({
    userName: "",
    role: "",
    password: "",
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    user[name] = value;
    setUser(user);
  };

  let onSubmit = (e) => {
    e.preventDefault();

    const obj = {
      userName: user.userName,
      role: user.role,
      password: user.password,
    };

    axios
      .post("http://localhost/PHP%20NO%20HTML%20NO%20Session/addUser.php", obj)
      .then((res) => console.log(res.status))
      .catch((error) => {
        console.log(error.response);
      });

    console.log(obj);
  };

  return (
    <div className="addUserPage">
      <Sidebar />
      
      <div className="addUserContainer">
        <Navbar />
        <div className="title">Add User :</div>
        <form onSubmit={onSubmit} className="form">
          
          <div className="container">
          <div className="username">
            <div>
              <label htmlFor="userName" className="title">User Name :</label>
            </div>
            <div className="input1">
              <input className="i1"
                id="userName"
                name="userName"
                onChange={handleChange}
                type="text"
              />
            </div>
          </div>
          <div className="role">
            <div>
              <label htmlFor="role" className="title">Role :</label>
            </div>
            <div className="input2">
              <input className="i2"
                id="role"
                type="role"
                name="role"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="pass">
            <div>
              <label htmlFor="password" className="title">Password :</label>
            </div>
            <div className="input3">
              <input className="i3"
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
              />
            </div>
          </div>
          
          </div>
          
          <div className="butt">
            <div></div>
            <div>
              <button type="submit" className="button">Add User</button>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default AddUserPage;
