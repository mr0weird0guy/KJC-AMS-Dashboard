import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUserPen, faUserMinus} from '@fortawesome/free-solid-svg-icons'
import Card from '@mui/material/Card';
// import Button from '@mui/material/Button';
// import Button from '@mui/material/Button';
import Button from "../Button/Button";
import "./Faculty.css"

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { MdMargin } from "react-icons/md";
import { colors } from "@mui/material";
  
function FacultyCard (props){
    return (
        <div className="card-container" >
            {/* <CardBody > */}
                <div style={{display:'flex', flexDirection:'row', alignItems:"center"}}>
                    <p style={{flex:'1'}}>{props.facultyName}</p>
                    <p style={{flex:'1'}}>{props.facultyEmail}</p>
                    <p style={{flex:'1'}}>{props.department}</p>
                    <p style={{flex:'1'}}>{props.club}</p>
                    {/* <div style={{flex:'1'}}> */}
                        <Button 
                        icon={<FontAwesomeIcon icon={faUserPen} />} 
                        text={'Edit'} /> 
                        <Button 
                        icon={<FontAwesomeIcon icon={faTrash} />} 
                        text={'Delete'} 
                        style={{'background-color':'#C70000', 'margin-left':'10px'}} /> 
                    {/* </div> */}
                </div>
            {/* </CardBody> */}
        </div>
    );
}

export default FacultyCard;