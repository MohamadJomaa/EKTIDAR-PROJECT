import axios from "axios";
import React from "react";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Select from "react-select";
import "./AddMeet.scss";

const AddMeetPage = () => {
  let [meet, setMeet] = useState({
    studentId: "",
    feedbackStd: "",
    feedbackDr: "",
    privateRate: "",
    timeTo: "",
    timeFrom: "",
    time: "",
    note: "",
    whyNotAttends: "",
    meetTitle: "",
    isOpen: "",
    attends: "",
    addingBy: "admin",
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    meet[name] = value;
    setMeet(meet);
  };

  let onSubmit = (e) => {
    e.preventDefault();

    const obj = {
      studentId: meet.studentId,
      feedbackStd: meet.feedbackStd,
      feedbackDr: meet.feedbackDr,
      privateRate: meet.privateRate,
      timeTo: meet.timeTo,
      timeFrom: meet.timeFrom,
      time: meet.time,
      note: meet.note,
      whyNotAttends: meet.whyNotAttends,
      meetTitle: meet.meetTitle,
      isOpen: meet.isOpen,
      attends: meet.attends,
      addingBy: meet.addingBy,
    };

    axios
      .post(
        "http://localhost/PHP%20NO%20HTML%20NO%20Session/insertMeet.php",
        obj
      )
      .then((res) => console.log(res), alert("Meet has been Added"))
      .catch((error) => {
        console.log(error.response);
      });
  };

  const options = [
    { value: 1, label: "user" },
    { value: 2, label: "admin" },
    { value: 3, label: "student" },
  ];

  return (
    <div className="meets">
      <Sidebar />
      <div className="meetsContainer">
        <Navbar />
        <div className="title">Add Meeting :</div>
        <form onSubmit={onSubmit} className="form">
          
          <div className="select1">
            Student Name :
            <Select className="select"
              options={options}
              onChange={(e) => (meet["studentId"] = e.value)}
              name="studentId"
              id="studentId"
            />
          </div>
          <div className="select2">
            Student Feedback :
            <input className="input1"
              id="feedbackStd"
              type="text"
              name="feedbackStd"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="select3">
            Doctor Feedback :
            <input className="input2"
              id="feedbackDr"
              type="text"
              name="feedbackDr"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="select4">
            Private Rate :{" "} 
            <Select className="select"
              options={[
                { value: 1, label: "1" },
                { value: 2, label: "2" },
                { value: 3, label: "3" },
                { value: 4, label: "4" },
                { value: 5, label: "5" },
              ]}
              onChange={(e) => (meet["privateRate"] = e.value)}
              name="privateRate"
            />
          </div>
          <div className="select5">
            From :{" "}
            <input className="input3"
              id="timeFrom"
              type="time"
              name="timeFrom"
              onChange={handleChange}
            />{" "}
            -  To 
            <input className="input4"
              id="timeTo"
              type="time"
              name="timeTo"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="select6">
            Time :
            <input className="input5"  id="time" type="date" name="time" onChange={handleChange} />
          </div>
          <div className="select7">
            <p>Notes :</p>
            <textarea className="textarea"
              id="note"
              type="text"
              name="note"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="select8">
            Reason for not attending :{" "}
            <input className="input6"
              id="whyNotAttends"
              type="text"
              name="whyNotAttends"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="select9">
            Meet Title :{" "}
            <input className="input7"
              id="meetTitle"
              type="text"
              name="meetTitle"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="select10">
            Open :
            <span className="r1">Yes</span> 
            <input className="radio1"
              type="radio"
              name="isOpen"
              value={1}
              onChange={handleChange}
            />
            No
            <input className="radio2"
              type="radio"
              value={0}
              name="isOpen"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="select11">
            Attend : <span className="r3">Yes</span>
            <input className="radio3"
              type="radio"
              name="attends"
              value={1}
              onChange={handleChange}
            />
            No
            <input className="radio4"
              type="radio"
              value={0}
              name="attends"
              onChange={handleChange}
            />
          </div>
          <br />
          {/*Button */}
          <button className="button" type="submit">Add Meet</button>
        </form>
      </div>
    </div>
  );
};

export default AddMeetPage;
