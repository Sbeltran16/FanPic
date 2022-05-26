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
        <Card.Header>Daft Punk "Random Access Memories"</Card.Header>
        <Card.Meta>
          <span>Price $25.99</span>
        </Card.Meta>
        <Card.Description>
          <a href="https://genius.com/albums/Daft-punk/Random-access-memories">Album Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating />
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://media.pitchfork.com/photos/627425dbc85171592b8a6e6a/1:1/w_600/Bad-Bunny-Un-Verano-Sin-Ti.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Bad Bunny "Un Verano Sin Ti"</Card.Header>
        <Card.Meta>
          <span>Price $29.99</span>
        </Card.Meta>
        <Card.Description>
          <a href="https://genius.com/albums/Bad-bunny/Un-verano-sin-ti">Album Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating />
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
        <Rating />
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://media.pitchfork.com/photos/627c1023d3c744a67a846260/1:1/w_600/Kendrick-Lamar-Mr-Morale-And-The-Big-Steppers.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Kendrick Lamar "Mr.Morale and The Big Steppers"</Card.Header>
        <Card.Meta>
          <span >Price $25.99</span>
        </Card.Meta>
        <Card.Description>
          <a href="https://genius.com/albums/Kendrick-lamar/Mr-morale-the-big-steppers">Album Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating />
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://i.discogs.com/4UWQYZUmkfB-ZARo9UGS9KDydlKKCmBSVRF7WknNd_0/rs:fit/g:sm/q:90/h:537/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcyNTEy/MzEtMTYyMzU5NDE2/OS05NDgzLmpwZWc.jpeg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Tame Impala "Currents"</Card.Header>
        <Card.Meta>
          <span>Price $21.99</span>
        </Card.Meta>
        <Card.Description>
          <a href="https://genius.com/albums/Tame-impala/Currents">Album Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating />
      </Card.Content>
    </Card>
  </Card.Group>
  <h2 className="Movies"><a className="popLinks" href="https://www.gameinformer.com/">Video Games</a></h2>
  <Card.Group itemsPerRow={5}>
    <Card>
    <Image
        src="https://m.media-amazon.com/images/I/614Y4NA6CVL._AC_SY741_.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Elden Ring</Card.Header>
        <Card.Meta>
          <span>Release Date: February 25, 2022</span>
        </Card.Meta>
        <Card.Description>
          <a href="https://www.imdb.com/title/tt10562854/?ref_=nv_sr_srsg_0">Game Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating />
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://image.api.playstation.com/vulcan/img/rnd/202010/2618/Y02ljdBodKFBiziorYgqftLE.png"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Last of Us Part II</Card.Header>
        <Card.Meta>
          <span >Release Date: June 19, 2020</span>
        </Card.Meta>
        <Card.Description>
          <a href="https://www.imdb.com/title/tt6298000/?ref_=nv_sr_srsg_0">Game Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating />
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://ih1.redbubble.net/image.1497699451.5504/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Horizon Forbidden West</Card.Header>
        <Card.Meta>
          <span>Release Date: February 18, 2022</span>
        </Card.Meta>
        <Card.Description>
          <a href="https://www.imdb.com/title/tt12496904/?ref_=nv_sr_srsg_0" >Game Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating />
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://www.denofgeek.com/wp-content/uploads/2020/07/halo-infinite-box-art.png?w=805"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Halo Infinte</Card.Header>
        <Card.Meta>
          <span>Release Date: November 15, 2021</span>
        </Card.Meta>
        <Card.Description>
          <a href="https://www.imdb.com/title/tt9437014/?ref_=nv_sr_srsg_0">Game Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating />
      </Card.Content>
    </Card>
    <Card>
    <Image
        src="https://store-images.s-microsoft.com/image/apps.7883.13835473807186336.304a128a-7199-43c4-a9ce-2fc111ee9ddb.3d22c924-790c-42af-a8ef-d451ba6467a7"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Call of Duty Warzone</Card.Header>
        <Card.Meta>
          <span>Release Date: March 10, 2020</span>
        </Card.Meta>
        <Card.Description>
          <a href="https://www.imdb.com/title/tt11957596/?ref_=nv_sr_srsg_0">Game Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating />
      </Card.Content>
    </Card>
  </Card.Group>
  </>
);

export default PopularPage;