<<<<<<< HEAD
import React from 'react';
import Header from '../Header/Header';
import PageControls from '../PageControls/PageControls';
import { BsFillPersonPlusFill } from "react-icons/bs"
import FacultyCard from './FaculyCard';
import Card from '@mui/material/Card';
=======
import PageHeader from "../PageHeader/PageHeader"
import { BsFillPersonFill } from "react-icons/bs"

import "./Faculty.css"

const FacultyPage = () => {
>>>>>>> 9107f0a640356cd3cc3d972f6ff442ee76099402

  return (
<<<<<<< HEAD
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
=======
    <div className="faculty-main">
      <PageHeader title="Faculty" icon={<BsFillPersonFill />} />
    </div>
>>>>>>> 9107f0a640356cd3cc3d972f6ff442ee76099402
  )
}

export default FacultyPage
