import React from "react";
import './Header.css'

function Header({icon, text}) {
  return (
    <div className="header-main-container">
      <h2 className="header-icon">{icon}</h2> <h2>{text}</h2>
    </div>
  );
}

export default Header;
