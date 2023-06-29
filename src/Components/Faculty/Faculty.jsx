import React from 'react';
import Header from '../Header/Header';
import PageControls from '../PageControls/PageControls';
import { BsFillPersonPlusFill } from "react-icons/bs"


const FacultyPage = () => {  
  return (
    <>
      <Header icon={<BsFillPersonPlusFill/>} text={"Faculty"}></Header>
      <PageControls inputplaceholder='Search Faculty'/>
    </>
  )
}
  
export default FacultyPage
  