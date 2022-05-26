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
        <Image src="https://media-exp1.licdn.com/dms/image/C5603AQHNVlW6-dZhIw/profile-displayphoto-shrink_800_800/0/1650471629578?e=1658966400&v=beta&t=j-Grk-4NBFd-Z4K_sTZmHA02oiN0WO4BTYt2_XTvIJY" wrapped ui={false} />
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