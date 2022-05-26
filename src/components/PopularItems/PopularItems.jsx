import React from "react";
import { Reveal, Icon, Button, Card, Image } from "semantic-ui-react";
import Rating from "../Rating/Rating"
import ".//PopularItems.css"

const PopularPage = () => (
<>
  <h2 className="pokemon"><a className="popLinks" href="https://www.pokemon.com/us/pokemon-tcg/">Pokemon</a></h2>
  <Card.Group itemsPerRow={5}>
    <Card>
    <Image
        src="https://assets.pokemon.com/assets/cms2/img/cards/web/PL2/PL2_EN_113.png"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Flying Pikachu</Card.Header>
        <Card.Description>
          <a href="https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/platinum-series/pl2/113/">Card Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating />
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH35/SWSH35_EN_79.png"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Charizard V</Card.Header>
        <Card.Description>
          <a href="https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/ss-series/swsh35/79/">Card Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating />
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://i.ebayimg.com/images/g/sTUAAOSwpfBf7vAq/s-l400.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Meowth VMax</Card.Header>
        <Card.Description>
         <a href="https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/ss-series/swshp/SWSH005/">Card Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating />
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH4/SWSH4_EN_188.png"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Rainbow Pikachu VMax</Card.Header>
        <Card.Description>
         <a href="https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/ss-series/swsh4/188/">Card Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          <Rating />
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://assets.pokemon.com/assets/cms2/img/cards/web/SMP/SMP_EN_SM77.png"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Mewtwo</Card.Header>
        <Card.Description>
          <a href="https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/sm-series/smp/SM77/">Card Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
       <Rating />
      </Card.Content>
    </Card>
  </Card.Group>
  <h2 className="Music"><a className="popLinks" href="https://www.billboard.com/">Music</a></h2>
  <Card.Group itemsPerRow={5}>
    <Card>
    <Image
        src="https://m.media-amazon.com/images/I/61Ia07wdZQL._SL1500_.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://i.pinimg.com/originals/2b/b4/ee/2bb4ee4b7b3cbb4c2e8412360d9dc35f.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://media.pitchfork.com/photos/6076fd2e17d37fe4717d4907/1:1/w_600/Olivia-Rodrigo-SOUR.jpeg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Olivia Rodrigo "Sour"</Card.Header>
        <Card.Meta>
          <span className="date">Price $19.98</span>
        </Card.Meta>
        <Card.Description>
            <a href="https://genius.com/albums/Olivia-rodrigo/Sour">Album Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://media.pitchfork.com/photos/627c1023d3c744a67a846260/1:1/w_600/Kendrick-Lamar-Mr-Morale-And-The-Big-Steppers.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://m.media-amazon.com/images/I/81ai6zx6eXL._AC_SY879_.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  </Card.Group>
  <h2 className="Movies"><a className="popLinks" href="https://www.rottentomatoes.com">Movies</a></h2>
  <Card.Group itemsPerRow={5}>
    <Card>
    <Image
        src="https://www.the-numbers.com/images/movies/opusdata/Wonder-Woman-1984-(2020).jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://www.themoviedb.org/t/p/original/9ltcubNi8RaTirTjW0ZAOgmUb9v.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://www.the-numbers.com/images/movies/opusdata/Fast-and-Furious-9-(2020).jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://m.media-amazon.com/images/I/81ai6zx6eXL._AC_SY879_.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://m.media-amazon.com/images/I/81ai6zx6eXL._AC_SY879_.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  </Card.Group>
  </>
);

export default PopularPage;