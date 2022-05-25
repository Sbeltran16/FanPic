import React from 'react'
import PopularItems from "../../components/PopularItems/PopularItems"
import Footer from '../../components/Footer/Footer'
import PageHeader from '../../components/Header/Header'

export default function PopularPage({handleLogout, user}) {
  return (
      <>
        <PageHeader handleLogout={handleLogout} user={user}/>
        <PopularItems />
        <Footer />
        </>
  )
}
