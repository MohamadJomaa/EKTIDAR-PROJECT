import React from "react";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Select from "react-select";
import "./AddMessage.scss";
import axios from "axios";

const AddMessagePage = () => {
  let [meessage, setMessage] = useState({
    date: "",
    forUser: "",
    fromUserName: "",
    MarkAsRead: 0,
    message: "",
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    meessage[name] = value;
    setMessage(meessage);
  };

  let onSubmit = (e) => {
    e.preventDefault();

    const obj = {
      date: meessage.date,
      forUser: meessage.forUser,
      fromUserName: meessage.fromUserName,
      MarkAsRead: meessage.MarkAsRead,
      message: meessage.message,
    };

    axios
      .post(
        "http://localhost/PHP%20NO%20HTML%20NO%20Session/sendMessage.php",
        obj
      )
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error.response);
      });

    console.log(obj);
  };

  const options = [
    { value: "user", label: "user" },
    { value: "admin", label: "admin" },
    { value: "student", label: "student" },
  ];

  return (
    <div className="addMessagePage">
      <Sidebar />
      <div className="addMessageContainer">
        <Navbar />
        <div className="title">Add Message :</div>
        <form onSubmit={onSubmit} className="form">
          
          <div className="select1">
            Send to :
            <Select className="select"
              options={options}
              onChange={(e) => (meessage["forUser"] = e.value)}
              name="forUser"
              id="forUser"
            />
          </div>

          <div className="select2">
            Message From :
            <Select className="select"
              options={options}
              onChange={(e) => (meessage["fromUserName"] = e.value)}
              name="fromUserName"
              id="fromUserName"
            />
          </div>

          <div className="select3">
            Date :
            <input className="input1" id="date" type="date" name="date" onChange={handleChange} />
          </div>

          <div className="select4">
            <p>Message :</p>
            <textarea className="textarea"
              id="message"
              type="text"
              name="message"
              onChange={handleChange}
            />
          </div>

          {/*Button */}
          <button className="button" type="submit">Add Event</button>
        </form>
      </div>
    </div>
  );
};

export default AddMessagePage;
