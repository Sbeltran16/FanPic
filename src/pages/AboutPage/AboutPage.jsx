import React from 'react'
import PageHeader from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"
import { Card, Icon, Image } from 'semantic-ui-react'
import ".//About.css"

 export default function About({handleLogout, user}){
    return (
        <>
        <PageHeader handleLogout={handleLogout} user={user}/>
        <div className="about" style={{ backgroundImage: `url(https://i.pinimg.com/originals/9c/3b/44/9c3b447bc23141425bb3176b5986cde4.jpg)` }}>
          <div className="aboutContainer">
            <h1>Creator</h1>
          </div><br/><br/><br/>
          <div>
          <Card>
        <Image src="https://lh3.googleusercontent.com/A8AEu90wSk-9HLaSh96pRc_1JI0kiqx4AY9Q5YaeuKnEk7bQk-roDChQUZA7WnV0Y0xf5w=s85" wrapped ui={false} />
        <Card.Content>
        <Card.Header>Sergio</Card.Header>
        <Card.Meta>
            <span className='date'>Age 27</span>
        </Card.Meta>
        <Card.Description>
            Created Fan-Pic with the intention of People storing what they enjoy and sharing it to the world!
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        </Card.Content>
    </Card>
          </div><br/>
    <Footer /> 
        </div>
        </>
    )
}