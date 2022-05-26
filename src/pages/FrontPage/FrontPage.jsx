import React from "react";
import PageHeader from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import ".//FrontPage.css";


export default function Home({user, handleLogout}) {
  return (
    <>
    <PageHeader handleLogout={handleLogout} user={user}/>
    <div className="home" style={{ backgroundImage: `url(http://78.media.tumblr.com/50d43db43843a7dc2fbb93c660a1d0dc/tumblr_ozar2dfRQI1rh3rypo1_1280.gif)` }}>
      <div className="headerContainer">
        <h1> FanPic </h1><br/><br/>
        <p> Where Your Valuables Are Stored!!</p>
        <Link to={`/${user?.username}`}>
          <button> Start Adding Collection! </button>
        </Link><br/><br/>
        <Link to="/popular">
          <button> Look At What's Popular! </button>
        </Link>
      </div>
    </div>
    <Footer />
    </>
  );
}

