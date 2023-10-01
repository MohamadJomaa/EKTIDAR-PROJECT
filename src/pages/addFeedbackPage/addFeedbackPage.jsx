import React from "react";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Select from "react-select";
import axios from "axios";
import "./addFeedback.scss";

const AddFeedbackPage = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  let [feedback, setFeedback] = useState({
    studentId: "",
    feedbackDr: "",
    privateRate: "",
    privateRateDr: "",
    feedbackResearchTeam: "",
    privateRateRT: "",
    feedbackStudentsAffairs: "",
    feedbackStudent: "",
    studentStatus: "",
    fileStatus: "",
    note: "",
    addingBy: "admin",
    date: today,
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    feedback[name] = value;
    setFeedback(feedback);
  };

  let onSubmit = (e) => {
    e.preventDefault();

    const obj = {
      studentId: feedback.studentId,
      feedbackDr: feedback.feedbackDr,
      privateRate: feedback.privateRate,
      privateRateDr: feedback.privateRateDr,
      feedbackResearchTeam: feedback.feedbackResearchTeam,
      privateRateRT: feedback.privateRateRT,
      feedbackStudentsAffairs: feedback.feedbackStudentsAffairs,
      feedbackStudent: feedback.feedbackStudent,
      studentStatus: feedback.studentStatus,
      fileStatus: feedback.fileStatus,
      note: feedback.note,
      addingBy: feedback.addingBy,
      date: feedback.date,
    };

    axios
      .post(
        "http://localhost/PHP%20NO%20HTML%20NO%20Session/insertFeedback.php",
        obj
      )
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error.response);
      });

    console.log(obj);
  };

  const options = [
    { value: 1, label: "user" },
    { value: 2, label: "admin" },
    { value: 3, label: "student" },
  ];

  return (
    <div className="addFeedbackPage">
      <Sidebar />
      <div className="addFeedbackContainer">
        <Navbar />
         <div className="title">Add Feedback :</div>
        <form onSubmit={onSubmit} className="form">
         
          <div className="select1">
            Student Name :
            <Select className="select"
              options={options}
              onChange={(e) => (feedback["studentId"] = e.value)}
              name="studentId"
              id="studentId"
            />
          </div>
          <br />
          <div className="select2">
            Doctor Feedback :
            <input className="input1"
              id="feedbackDr"
              type="text"
              name="feedbackDr"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="select3">
            Private Rate :{" "}
            <Select className="select"
              options={[
                { value: 1, label: "1" },
                { value: 2, label: "2" },
                { value: 3, label: "3" },
                { value: 4, label: "4" },
                { value: 5, label: "5" },
              ]}
              onChange={(e) => (feedback["privateRate"] = e.value)}
              name="privateRate"
            />
          </div>
          <br />
          <div className="select4">
            Research Team Feedback :
            <input className="input2"
              id="feedbackResearchTeam"
              type="text"
              name="feedbackResearchTeam"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="select5">
            Private Rate RT :{" "}
            <Select className="select"
              options={[
                { value: 1, label: "1" },
                { value: 2, label: "2" },
                { value: 3, label: "3" },
                { value: 4, label: "4" },
                { value: 5, label: "5" },
              ]}
              onChange={(e) => (feedback["privateRateRT"] = e.value)}
              name="privateRateRT"
            />
          </div>
          <br />
          <div className="select6">
            Private Rate Doctor :{" "}
            <Select className="select"
              options={[
                { value: 1, label: "1" },
                { value: 2, label: "2" },
                { value: 3, label: "3" },
                { value: 4, label: "4" },
                { value: 5, label: "5" },
              ]}
              onChange={(e) => (feedback["privateRateDr"] = e.value)}
              name="privateRateDr"
            />
          </div>
          <br />
          <div className="select7">
            Students Affairs Feedback :
            <input className="input3"
              id="feedbackStudentsAffairs"
              type="text"
              name="feedbackStudentsAffairs"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="select8">
            Student Feedback :
            <input className="input4"
              id="feedbackStudent"
              type="text"
              name="feedbackStudent"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="select9">
            Student Status :
            <input className="input5"
              id="studentStatus"
              type="text"
              name="studentStatus"
              onChange={handleChange}
            />
          </div>
          <br />{" "}
          <div className="select10">
            File Status :
            <input className="input6"
              id="fileStatus"
              type="text"
              name="fileStatus"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="select11">
            <p>Notes :</p>
            <textarea className="textarea"
              id="note"
              type="text"
              name="note"
              onChange={handleChange}
            />
          </div>
          <br />
          {/*Button */}
          <button className="button" type="submit">Add Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default AddFeedbackPage;
