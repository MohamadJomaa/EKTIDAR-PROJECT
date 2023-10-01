import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import EventIcon from '@mui/icons-material/Event';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" className="top" style={{ textDecoration: "none" }}>
          <span className="logo">Ektidar</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard / الاحصائات</span>
            </li>
          </Link>
          <p className="title">Users</p>
          <Link to="/students" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>Students / الطلاب</span>
            </li>
          </Link>

          <p className="title">Supervisors</p>
          <Link to="/docters" style={{ textDecoration: "none" }}>
            <li>
              <SupervisorAccountOutlinedIcon className="icon" />
              <span>Doctors / الدكاترة</span>
            </li>
          </Link>

          <p className="title">Lists</p>
          <Link to="/meetings" style={{ textDecoration: "none" }}>
            <li>
              <MeetingRoomIcon className="icon" />
              <span>Meetings / الاجتماعات</span>
            </li>
          </Link>

          <p className="title">Admin</p>
          <Link to="/AddUserPage" style={{ textDecoration: "none" }}>
            <li>
              <SupervisorAccountIcon className="icon" />
              <span>Add User / إضافة مستخدم</span>
            </li>
          </Link>
          <Link to="/AddEventPage" style={{ textDecoration: "none" }}>
            <li>
              <EventIcon className="icon" />
              <span>Add Event / إضافة حدث</span>
            </li>
          </Link>
          <Link to="/AddMeetPage" style={{ textDecoration: "none" }}>
            <li>
              <MeetingRoomOutlinedIcon className="icon" />
              <span>Add Meet / إضافة لقاء</span>
            </li>
          </Link>
          <Link to="/AddMessagePage" style={{ textDecoration: "none" }}>
            <li>
              <MessageOutlinedIcon className="icon" />
              <span>Add Message / إضافة رسالة</span>
            </li>
          </Link>
          <Link to="/AddFeedbackPage" style={{ textDecoration: "none" }}>
            <li>
              <FeedbackOutlinedIcon className="icon" />
              <span>Add Feedback / إضافة تقرير</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
