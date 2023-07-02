import React from 'react';
import Header from '../PageHeader/PageHeader';
import PageControls from '../PageControls/PageControls';
import { BsFillPersonPlusFill } from "react-icons/bs"
import FacultyCard from '../Common/TableCard';
import PageHeader from "../PageHeader/PageHeader"

const FacultyPage = () => {

  return (
    <>
      <PageHeader icon={<BsFillPersonPlusFill/>} title="Faculty"></PageHeader>
      <PageControls inputplaceholder='Search Faculty'/>

      <ul style={{listStyleType: 'none'}}>
          <li>
          <FacultyCard row1='Abhijaan Ganguly' row2='21bcac05@kristujayanti.com' row3='Computer Science(UG)' row4='UBA' />
          </li>
          <li>
          <FacultyCard row1='Abhijaan Ganguly' row2='21bcac05@kristujayanti.com'  row4='UBA' />
          </li>
          <li>
          <FacultyCard row1='Abhijaan Ganguly'  row3='Computer Science(UG)' row4='UBA' />
          </li>
          <li>
          <FacultyCard row1='Abhijaan Ganguly' />
          </li>
        </ul>
    </>

  )
}

export default FacultyPage
