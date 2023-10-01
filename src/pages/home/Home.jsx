import React from "react";
import "./home.scss";
import Sidebar from "./../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import PieCahrt from "../../components/pieChart/PieChart";
import Chart from "./../../components/chart/Chart";
import { Link } from "react-router-dom";
import { display } from "@mui/system";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Link
            to="/students"
            style={{
              textDecoration: "none",
              justifyContent: "space-between",
              flex: "1",
            }}
          >
            <Widget type="students" />
          </Link>

          <Link
            to="/docters"
            style={{
              textDecoration: "none",
              justifyContent: "space-between",
              flex: "1",
            }}
          >
            <Widget type="docters" />
          </Link>

          <Link
            to="/projects"
            style={{
              textDecoration: "none",
              justifyContent: "space-between",
              flex: "1",
            }}
          >
            <Widget type="projects" />
          </Link>
        </div>
        <div className="charts">
          <PieCahrt />
        </div>
        <div className="charts">
          <Chart />
        </div>
      </div>
    </div>
  );
};
export default Home;
