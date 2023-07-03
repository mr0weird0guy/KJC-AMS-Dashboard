import React from 'react';
import Header from '../PageHeader/PageHeader';
import PageControls from '../PageControls/PageControls';
import { BsFillPersonPlusFill } from "react-icons/bs"
import TableCard from '../Common/TableCard';
import PageHeader from "../PageHeader/PageHeader"
import { BsFillPersonFill } from "react-icons/bs"
import { readDocuments } from '../../Controllers/index';
import './Faculty.css'

const FacultyPage = () => {

  const facultyData = readDocuments("faculty");
  console.log({facultyData});
  return (
    <>
    <PageHeader title="Faculty" icon={<BsFillPersonFill />} />
    <div className='main-container'>
      <PageControls inputplaceholder="Search Faculty" />
      <div className='table-container'>
        <ul style={{listStyleType: 'none'}} >
          {/* {facultyData.map((faculty) => 
            <li>
              <FacultyCard 
              row1= {faculty.facultyName}
              row2= {faculty.facultyEmail} 
              row3={faculty.department}
              row4= {faculty.club} />
            </li>
          )} */}
          <li>
            <TableCard row1='Abhijaan Ganguly' row2='21bcac05@kristujayanti.com' row3='Computer Science(UG)' row4='UBA' />
          </li>
          <li>
            <TableCard row1='Abhijaan Ganguly' row2='21bcac05@kristujayanti.com' row3='Computer Science(UG)' row4='UBA' />        
          </li>
          <li>
            <TableCard row1='Abhijaan Ganguly' row2='21bcac05@kristujayanti.com' row3='Computer Science(UG)' row4='UBA' />        
          </li>
          <li>
            <TableCard row1='Abhijaan Ganguly' row2='21bcac05@kristujayanti.com' row3='Computer Science(UG)' row4='UBA' />        
          </li>
          <li>
            <TableCard row1='Abhijaan Ganguly' row2='21bcac05@kristujayanti.com' row3='Computer Science(UG)' row4='UBA' />
          </li>
          <li>
            <TableCard row1='Abhijaan Ganguly' row2='21bcac05@kristujayanti.com' row3='Computer Science(UG)' row4='UBA' />        
          </li>
          <li>
            <TableCard row1='Abhijaan Ganguly' row2='21bcac05@kristujayanti.com' row3='Computer Science(UG)' row4='UBA' />        
          </li>
          <li>
            <TableCard row1='Abhijaan Ganguly' row2='21bcac05@kristujayanti.com' row3='Computer Science(UG)' row4='UBA' />        
          </li>
          <li>
            <TableCard row1='Abhijaan Ganguly' row2='21bcac05@kristujayanti.com' row3='Computer Science(UG)' row4='UBA' />
          </li>
          <li>
            <TableCard row1='Abhijaan Ganguly' row2='21bcac05@kristujayanti.com' row3='Computer Science(UG)' row4='UBA' />        
          </li>
          <li>
            <TableCard row1='Abhijaan Ganguly' row2='21bcac05@kristujayanti.com' row3='Computer Science(UG)' row4='UBA' />        
          </li>
          <li>
            <TableCard row1='Abhijaan Ganguly' row2='21bcac05@kristujayanti.com' row3='Computer Science(UG)' row4='UBA' />        
          </li>
        </ul>
      </div>
    </div>
  </>
  );
}

export default FacultyPage;
