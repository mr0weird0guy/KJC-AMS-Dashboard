import React,{useEffect} from "react";
import "./Events.css";
import { MdCalendarMonth, MdAddCircleOutline } from "react-icons/md"
import Header from "../Header/Header";
import Inputbox from "../Inputbox/Inputbox";
import Button from "../Button/Button";
import { Link, NavLink, Outlet } from 'react-router-dom'

function Events() {

  return (
    <div className="events-main-container">
      <Header icon={<MdCalendarMonth/>} text={"Events"}></Header>
      <div className="event-controls-container">
        <Inputbox placeholder={"Search for events"} btnText={"Search"} action={(string) => setvenueText(string)} /> {/*click={searchEvent} */}
        <Button text={"Add"} icon={<MdAddCircleOutline/>} btnClass="add-event-btn" action={() => navigate(`/addevent`)}/>
        <p>Dropdown </p>
        <p> Dropdown</p>
      {/* <div className="header-tabs-container">
        <div className="tabs-container">
        <NavLink to={"allevents"} className="nav-link">All Events</NavLink>
        <NavLink to={"todayevent"} className="nav-link">Today's Events</NavLink>
        <NavLink to={"history"} className="nav-link">History</NavLink>
        </div>
      </div> */}
      </div>

      <div className="event-body-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Events;
