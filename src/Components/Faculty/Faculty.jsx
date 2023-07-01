import React from 'react';
import Header from '../Header/Header';
import PageControls from '../PageControls/PageControls';
import { BsFillPersonPlusFill } from "react-icons/bs"
import FacultyCard from './FaculyCard';
import Card from '@mui/material/Card';

const FacultyPage = () => {  
  return (
    <>
      <Header icon={<BsFillPersonPlusFill/>} text={"Faculty"}></Header>
      <PageControls inputplaceholder='Search Faculty'/>

      <ul style={{listStyleType: 'none'}}>
          <li>
          <FacultyCard facultyName='Abhijaan Ganguly' facultyEmail='21bcac05@gmail.com' department='Computer Science(UG)' club='UBA' />
          </li>
          <li>
          <FacultyCard facultyName='Abhijaan Ganguly' facultyEmail='21bcac05@gmail.com' department='Computer Science(UG)' club='UBA' />
          </li>
          <li>
          <FacultyCard facultyName='Abhijaan Ganguly' facultyEmail='21bcac05@gmail.com' department='Computer Science(UG)' club='UBA' />
          </li>
          <li>
          <FacultyCard facultyName='Abhijaan Ganguly' facultyEmail='21bcac05@gmail.com' department='Computer Science(UG)' club='UBA' />
          </li>
        </ul>
    </>
  )
}
  
export default FacultyPage
  