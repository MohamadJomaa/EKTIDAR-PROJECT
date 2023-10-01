import "./navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import logo from "../../images/logo2.png"
import text from "../../images/text.png"
//import { DarkModeContext } from "../../context/darkModeContext";
//import { useContext } from "react";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item1">
                        <img src={text} className="avatar1"/>
                    </div>
                    <div className="item">
                        <img
                        src={logo}
                        
                        className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar