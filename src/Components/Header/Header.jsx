import React from "react";
import './Header.css'

function Header(props) {
  return (
    <div className="header-main-container">
      <p>{props.headerText}</p>
    </div>
  );
}

export default Header;
