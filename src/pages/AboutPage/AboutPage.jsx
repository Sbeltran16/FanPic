import React from 'react'
import PageHeader from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"
import ".//About.css"

 export default function About({handleLogout, user}){
    return (
        <>
        <PageHeader handleLogout={handleLogout} user={user}/>
        <div className="about">
            <h1>About Page</h1>
        </div>
        <Footer />
        </>
    )
}