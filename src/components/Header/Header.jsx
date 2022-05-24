import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Icon} from "semantic-ui-react"
import ".//Header.css";

export default function PageHeader({user, handleLogout}) {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src="" />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to={`/${user?.username}`}> Account </Link>
          <Link to="/about"> About </Link>
          <Link to="" onClick={handleLogout}> Logout </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to={`/${user?.username}`}> Account </Link>
        <Link to="/about"> About </Link>
        <Link to="" onClick={handleLogout}> Logout </Link>
        <button onClick={toggleNavbar}>
        <Icon name='th' size='large' />
        </button>
      </div>
    </div>
  );
}

