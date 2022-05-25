import React from 'react'
import PopularItems from "../../components/PopularItems/PopularItems"
import Footer from '../../components/Footer/Footer'
import PageHeader from '../../components/Header/Header'
import ".//PopularPage.css"

export default function PopularPage({handleLogout, user}) {
  return (
      <>
        <PageHeader handleLogout={handleLogout} user={user}/>
        <h1>Popular</h1>
        <PopularItems /><br/>
        <Footer/>
        </>
  )
}
