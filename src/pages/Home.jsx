import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function Home() {
  return (
    <div>
      <div>
        <Link to="/beers" className="home-nav">
          <img src={beers} alt="beer" />
          <h3>All Beers</h3>
        </Link>
        <p>
          Lorem fistrum llevame al sircoo te voy a borrar el cerito fistro
          pupita qué dise usteer. Llevame al sircoo amatomaa a wan a peich. A
          gramenawer de la pradera llevame al sircoo mamaar a gramenawer no te
          digo trigo por no llamarte Rodrigor mamaar.
        </p>
      </div>
      <div>
        <Link to="/random-beer" className="home-nav">
          <img src={newBeer} alt="beer" />
          <h3>Random Beer</h3>
        </Link>
        <p>
          Lorem fistrum llevame al sircoo te voy a borrar el cerito fistro
          pupita qué dise usteer. Llevame al sircoo amatomaa a wan a peich. A
          gramenawer de la pradera llevame al sircoo mamaar a gramenawer no te
          digo trigo por no llamarte Rodrigor mamaar.
        </p>
      </div>
      <div>
        <Link to="/new-beer" className="home-nav">
          <img src={randomBeer} alt="beer" />
          <h3>New beer</h3>
        </Link>
        <p>
          Lorem fistrum llevame al sircoo te voy a borrar el cerito fistro
          pupita qué dise usteer. Llevame al sircoo amatomaa a wan a peich. A
          gramenawer de la pradera llevame al sircoo mamaar a gramenawer no te
          digo trigo por no llamarte Rodrigor mamaar.
        </p>
      </div>
    </div>
  );
}

export default Home;
