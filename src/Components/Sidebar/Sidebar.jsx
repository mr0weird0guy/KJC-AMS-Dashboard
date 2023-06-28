import React from "react"
import "./Sidebar.css"
import { MdCalendarMonth, MdHome } from "react-icons/md"
import { BsBuildingAdd } from "react-icons/bs"
import {FaGraduationCap} from "react-icons/fa"
import Button from "../Button/Button"
import { Link, NavLink } from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar-outer-container">
      {/* admin-info-container */}

      {/* nav-links-container */}
      <div className="nav-links-container">
        <NavLink to="/addevent" className="nav-links-common">
          <MdHome />
          <p>Home</p>
        </NavLink>

        <NavLink to={"/events/allevents"} className="nav-links-common">
          <MdCalendarMonth />
          <p>Events</p>
        </NavLink>
        
        <NavLink to={"/venue"} className="nav-links-common">
          <BsBuildingAdd />
          <p>Venue</p>
        </NavLink>

        <NavLink to={"/department"} className="nav-links-common">
          <FaGraduationCap />
          <p>Department</p>
        </NavLink>

        <NavLink to={"/faculty"} className="nav-links-common">
          <BsBuildingAdd />
          <p>Faculty</p>
        </NavLink>

        {/* <NavLink to={"/event/1"} className="nav-links-common">
          <MdAddCircle />
          <p>Event Details</p>
        </NavLink> */}
      </div>
    </div>
  )
}

export default Sidebar
