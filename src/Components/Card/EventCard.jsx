import React from "react";
import "./Card.css";
import cardImage from "../../assets/card_img.png";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MdEdit } from "react-icons/md";


function EventCard({ data , deleteEvent}) {
  const navigate = useNavigate();

  const convertTime = (startTime) => {
    const date = new Date(startTime / (startTime >= 1000000000 ? 1 : 1000000)); // divide by 1 billion for seconds, 1 million for nanoseconds
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeStr = `${hours % 12 === 0 ? 12 : hours % 12}:${minutes < 10 ? '0' : ''}${minutes} ${hours < 12 ? 'AM' : 'PM'}`;
    return timeStr;
  };

  return (
    <div className="card-main-container">
      <div className="img-container">
        { data.backDrop === null || data.backDrop === ""
          ? <img src={cardImage} alt="Default Card Image" />
          : <img src={data.backDrop} alt="test image" />
        }
      </div>
      <div className="card-info-container">
        <div className="info-common data">
          <p>Event Name</p>
          <p>{data.eventName}</p>
        </div>
        <div className="info-common data">
          <p>Date</p>
          <p>{new Date(data.eventDate).toDateString()}</p>
        </div>

        <div className="info-common venue">
          <p>Venue</p>
          <p>{data.venue}</p>
        </div>

        <div className="info-common time">
          <p>Time</p>
          <p>{convertTime(data.startTime) }</p>
        </div>
      </div>

      <div className="btn-container" style={{display:'flex',justifyContent:"space-between"}}>
      {/* icon={{MdEdit}} How to use Icons */}
        <Button text={"Edit Event"} icon={<MdEdit/>} style={{width:'max-content',marginLeft:'0%'}} btnClass="primary" action={() => navigate(`/event/${data.id}`)}/>
        {/* <Button text={"Delete"} style={{width:'max-content',marginLeft:'0%'}} btnClass="primary" action={() => deleteEvent(data.id)}/> */}
      </div>
    </div>
  );
}

export default EventCard;
