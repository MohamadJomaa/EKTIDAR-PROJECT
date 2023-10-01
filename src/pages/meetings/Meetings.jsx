import "./meetings.scss"
import MTable from "../../components/meetingTable/MTable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"



const Meetings = () => {
    return(
        <div className="meetings">
            <Sidebar/>
            <div className="meetingsContainer">
                <Navbar/>
                <MTable/>
            </div>
        </div>
    )
}
export default Meetings