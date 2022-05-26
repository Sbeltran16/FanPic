import React from 'react'
import PopularItems from "../../components/PopularItems/PopularItems"
import Footer from '../../components/Footer/Footer'
import PageHeader from '../../components/Header/Header'
import {Icon} from 'semantic-ui-react'
import ".//PopularPage.css"


export default function PopularPage({handleLogout, user}) {
  return (
      <>
        <PageHeader handleLogout={handleLogout} user={user}/>
        <h1 className="popularTitle"><Icon name='fire' color="orange" size='Large' />Popular</h1>
        <PopularItems /><br/>
        <Footer/>
        </>
  )
}
