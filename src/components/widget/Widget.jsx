import "./widget.scss"
import PersonIcon from '@mui/icons-material/Person';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { Link } from "react-router-dom";

const Widget = ({type}) => {

    let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "students":
      data = {
        title: "Students / الطلاب",
       
        link: "View all Students",
        icon: (
          <PersonIcon
            className="icon"
            style={{
              color: "#005ca7",
              backgroundColor: "whitesmoke",
            }}
          />
        ),
      };
      break;
    case "docters":
      data = {
        title: "Doctors / الدكاترة",
      
        link:"View all Doctors",
        icon: (
          <SupervisorAccountOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "projects":
      data = {
        title: "Courses / الورش",
        
        link: "View Courses",
        icon: (
          <AssignmentTurnedInIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    default:
        break;
     }


    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                {data.icon}
            </div>
        </div>
    )
}

export default Widget