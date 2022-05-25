import React from 'react'
import PageHeader from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"
import ".//About.css"

 export default function About({handleLogout, user}){
    return (
        <>
        <PageHeader handleLogout={handleLogout} user={user}/>
        <div className="about" style={{ backgroundImage: `url(https://wallup.net/wp-content/uploads/2017/11/17/243026-vinyl-record_players-music.jpg)` }}>
          <div className="headerContainer">
            <h1> About </h1>
          </div>
          <div>
              
          </div>
        </div>
        <Footer />
        </>
    )
}