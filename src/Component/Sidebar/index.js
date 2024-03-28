import React from 'react'
import { Link } from 'react-router-dom';
import 
{BsBoxes, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { IoIosCloseCircle } from "react-icons/io";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsBoxes  className='icon_header'/> Crypto
            </div>
            <div>
            <span className='icon close_icon' onClick={OpenSidebar}><IoIosCloseCircle /></span>
            </div>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/population">
                    <BsFillArchiveFill className='icon'/> population
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/crypto">
                    <BsFillGrid3X3GapFill className='icon'/> Crypto
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/about">
                    <BsPeopleFill className='icon'/> About
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/contact">
                    <BsListCheck className='icon'/> Contact
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/reports">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar