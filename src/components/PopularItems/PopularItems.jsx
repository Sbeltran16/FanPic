import React from 'react'
import { Card } from 'semantic-ui-react'

const src = '/images/wireframe/image.png'

const CardExampleColumnCount = () => (
  <Card.Group itemsPerRow={4}>
    <div>
          <h2>Pokemon</h2>
    </div>
    <Card raised image={"https://assets.pokemon.com/assets//cms2/img/cards/web/SWSH9/SWSH9_EN_27.png"} />
    <div>
        <h2>Music</h2>
    </div>
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
  </Card.Group>
)

export default CardExampleColumnCount