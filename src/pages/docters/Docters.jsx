import React from 'react'
import "./docters.scss"
import Sidebar from './../../components/sidebar/Sidebar';
import Navbar from "../../components/navbar/Navbar";
import DTable from './../../components/doctersTable/DTable';

const Docters = () => {
    return (
        <div className='docters'>
            <Sidebar/>
            <div className="doctersContainer">
                <Navbar/>
                <DTable/>
            </div>
        </div>
    )
}
export default Docters 