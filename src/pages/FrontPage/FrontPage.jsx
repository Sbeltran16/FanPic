import React from "react";
import PageHeader from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import ".//FrontPage.css";


export default function Home({user, handleLogout}) {
  return (
    <>
    <PageHeader handleLogout={handleLogout} user={user}/>
    <div className="home" style={{ backgroundImage: `url(https://pa1.narvii.com/6541/6e12e5e680c4868819f225b135b2c3aa60d8531f_hq.gif)` }}>
      <div className="headerContainer">
        <h1> FanPic </h1><br/><br/>
        <p> Where Your Valuables Are Stored!!</p>
        <Link to={`/${user?.username}`}>
          <button> Start Adding Collection </button>
        </Link>
      </div>
    </div>
    <Footer />
    </>
  );
}

