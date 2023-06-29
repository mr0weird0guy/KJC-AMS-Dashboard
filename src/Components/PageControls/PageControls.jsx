import React from 'react';
import Inputbox from '../Inputbox/Inputbox';
import Button from '../Button/Button';
import "./PageControls.css"
import { MdSearch,MdAddCircleOutline } from "react-icons/md";

export default function PageControls({
  inputplaceholder = "Search", 
  addFunction }) {
  return (
    <div className="top-controls-container">
      <div className="left-controls">
        <Inputbox style={{"width":"25vw"}} withButton={false} placeholder={inputplaceholder} buttonIcon={<MdSearch/>} btnText={"Search"} action={(string) => setText(string)} /> {/*click={searchEvent} */}
        <Button text={"Add"} icon={<MdAddCircleOutline/>} btnClass="add-event-btn" action={() => addFunction}/>
      </div>
      <div className="right-controls">
        <p>Dropdown </p>
      </div>
    </div>
  )
}