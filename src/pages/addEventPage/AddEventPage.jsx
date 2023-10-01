import React from "react";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Select from "react-select";
import "./AddEvent.scss";
import axios from "axios";
import { useEffect } from "react";

const AddEventPage = () => {
  let [studentsIds, setStudentsIds] = useState([]);
  let [event, setEvent] = useState({
    studentId: "",
    contactDone: "",
    contactByDr: "",
    answer: "",
    sendFileTo: "",
    requiredFromStudent: "",
    requirementsReceived: "",
    note: "",
    addingBy: "admin",
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    event[name] = value;
    setEvent(event);
  };

  let onSubmit = (e) => {
    e.preventDefault();

    const obj = {
      studentId: event.studentId,
      contactDone: event.contactDone,
      contactByDr: event.contactByDr,
      answer: event.answer,
      sendFileTo: event.sendFileTo,
      requiredFromStudent: event.requiredFromStudent,
      requirementsReceived: event.requirementsReceived,
      note: event.note,
      addingBy: event.addingBy,
    };

    axios
      .post(
        "http://localhost/PHP%20NO%20HTML%20NO%20Session/insertEvent.php",
        obj
      )
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error.response);
      });

    console.log(obj);
  };

  /* useEffect(() => {
    axios
      .post(
        "http://localhost/PHP%20NO%20HTML%20NO%20Session/getStudentsIds.php"
      )
      .then((res) => setStudentsIds(res.data))
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  let options = [];

  {
    studentsIds.map((std, idx) => {
      options.push({ value: std.id, label: std.id });
    });
  } */

  const options = [
    { value: 1, label: "user" },
    { value: 2, label: "admin" },
    { value: 3, label: "student" },
    { value: 4, label: "test" },
  ];

  return (
    <div className="addEventPage">
      <Sidebar />
      <div className="addEventContainer">
        <Navbar />
        <div className="title">Add Event :</div>
        <form onSubmit={onSubmit} className="form">
          
          <div className="select1">
            Student Name :
            <Select className="select"
              options={options}
              onChange={(e) => (event["studentId"] = e.value)}
              name="studentId"
              id="studentId"
            />
          </div>

          <div className="select2">
            Contact By : Doctor event Name :
            <Select  className="select"
              options={options}
              onChange={(e) => (event["contactByDr"] = e.value)}
              name="contactByDr"
            />
          </div>

          <div className="select3">
            Send to : Doctor event Name :
            <Select  className="select"
              options={options}
              onChange={(e) => (event["sendFileTo"] = e.value)}
              name="sendFileTo"
            />
          </div>

          <div className="select4">
            Required From Student :
            <input  className="textbox"
              id="requiredFromStudent"
              type="text"
              name="requiredFromStudent"
              onChange={handleChange}
            />
          </div>

          <div className="select5">
            Answer : 
            <span className="answer">Yes</span>
            <input  className="radio1"
              type="radio"
              name="answer"
              value={1}
              onChange={handleChange}
            />
            No
            <input  className="radio2"
              type="radio"
              value={0}
              name="answer"
              onChange={handleChange}
            />
          </div>

          <div className="select6">
            Requirements Received : 
            <span className="r3">Yes</span>
            <input  className="radio3"
              type="radio"
              name="requirementsReceived"
              value={1}
              onChange={handleChange}
            />
            No
            <input  className="radio4"
              type="radio"
              value={0}
              name="requirementsReceived"
              onChange={handleChange}
            />
          </div>

          <div className="select7">
            Contact Done : 
            <span className="r5">Yes</span>
            <input  className="radio5"
              type="radio"
              name="contactDone"
              value={1}
              onChange={handleChange}
            />
            No
            <input  className="radio6"
              type="radio"
              value={0}
              name="contactDone"
              onChange={handleChange}
            />
          </div>

          <div className="select8">
            <p className="p">Notes :</p>
            <textarea  className="textarea"
              id="note"
              type="text"
              name="note"
              onChange={handleChange}
            />
          </div>

          {/*Button */}
          <button type="submit" className="button">Add Event</button>
        </form>
      </div>
    </div>
  );
};

export default AddEventPage;
