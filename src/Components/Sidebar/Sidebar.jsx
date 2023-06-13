import React from "react";
import "./Sidebar.css";
import { MdAdd, MdAddCircle, MdCalendarMonth, MdHome } from "react-icons/md";
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-outer-container">
      {/* admin-info-container */}

      {/* nav-links-container */}
      <div className="nav-links-container">
        <NavLink to="/addevent" className="nav-links-common">
          <MdAdd />
          <p>Add Event</p>
        </NavLink>

        <NavLink to={"/events/allevents"} className="nav-links-common">
          <MdCalendarMonth />
          <p>Events</p>
        </NavLink>

        <NavLink to={"/venueDeptFaculty"} className="nav-links-common">
          <MdAddCircle />
          <p>Venue/ Dept. /Faculty</p>
        </NavLink>
        {/* <NavLink to={"/event/1"} className="nav-links-common">
          <MdAddCircle />
          <p>Event Details</p>
        </NavLink> */}
      </div>
    </div>
  );
}

export default Sidebar;
