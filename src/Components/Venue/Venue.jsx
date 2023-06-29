import React from 'react';
import Header from '../Header/Header';
import PageControls from '../PageControls/PageControls';
import {BsBuildingAdd} from "react-icons/bs"

const Venue = () => {
  return (
  <>
    <Header icon={<BsBuildingAdd/>} text={"Venue"}></Header>
    <PageControls inputplaceholder='Search Venue'/>
  </>
  )
}

export default Venue
