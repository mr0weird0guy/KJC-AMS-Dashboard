import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faUserPen, faUserMinus} from '@fortawesome/free-solid-svg-icons'
import { BiEdit } from "react-icons/bi";

import Card from '@mui/material/Card';
// import Button from '@mui/material/Button';
// import Button from '@mui/material/Button';
import Button from "./Button";
import "./TableCard.css"

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { MdDelete } from "react-icons/md";
import { colors } from "@mui/material";
  
function FacultyCard (props){
    const cars = [0,0,0,0];
    const flexValue = (value) => {
        if(value){
            return 1;
        }
        else{
            return 0;
        }
    }
    return (
        <div className="card-container" >
            {/* <CardBody > */}
                <div className="flex">
                    <p  style={{flex:flexValue(props.row1), alignItems: "center"}}>{props.row1}</p>
                    <p  style={{flex:flexValue(props.row2), alignItems: "center"}}>{props.row2}</p>
                    <p  style={{flex:flexValue(props.row3)}}>{
                    props.row3
                    }</p>
                    <p  style={{flex:flexValue(props.row4), alignItems: "center"}}>{
                    props.row4
                    }</p>
                    {/* <div className="flex" style={{flex:1}}> */}
                        <Button  style={{flex:1}}
                        icon={ <BiEdit />} 
                        text={'Edit'} /> 
                        
                        <Button  style={{flex:1}}
                        icon={<MdDelete/>} 
                        text={'Delete'}  /> 
                    {/* </div> */}
                </div>
            {/* </CardBody> */}
        </div>
    );
}

export default FacultyCard;