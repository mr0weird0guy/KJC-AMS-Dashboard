import React,{useEffect} from "react";
import "./Events.css";
import { Link, NavLink, Outlet } from 'react-router-dom'

function Events() {

  return (
    <div className="events-main-container">
      <div className="header-tabs-container">
        <div className="tabs-container">
          <NavLink to={"allevents"} className="nav-link">All Events</NavLink>
          <NavLink to={"todayevent"} className="nav-link">Today's Events</NavLink>
          {/* <NavLink to={"history"} className="nav-link">History</NavLink> */}
        </div>
      </div>

      <div className="event-cards-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Events;
