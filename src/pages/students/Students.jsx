import "./students.scss"
import Sidebar from './../../components/sidebar/Sidebar';
import Navbar from "../../components/navbar/Navbar";
import STable from "../../components/studentsTable/STable";


const Students = () => {
    return (
        <div className='students'>
            <Sidebar/>
            <div className="studentsContainer">
                <Navbar/>
                <STable/>
            </div>
        </div>
    )
}
export default Students 