import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Input} from "semantic-ui-react"
import ".//Header.css";
import SearchBar from "../SearchBar/SearchBar";


export default function PageHeader({user, handleLogout}) {
  const [openLinks, setOpenLinks] = useState(false);

  function toggleNavbar() {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div class="pageName">FanPic</div>
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to={`/${user?.username}`}> Account </Link>
          <Link to="/about"> About </Link>
          <Link to="" onClick={handleLogout}> Logout </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"><Icon name='home' size='large' />Home</Link>
        <Link to={`/${user?.username}`}> <Icon name='user' size='large' />Account </Link>
        <Link to="/about"><Icon name='info' size='large' />About</Link>
        <Link to="" onClick={handleLogout}> <Icon name='logout' size='large' />Logout</Link>
        <button onClick={toggleNavbar}>
        <Icon name='bars' size='large' />
        </button>
      </div>
    </div>
  );
}

