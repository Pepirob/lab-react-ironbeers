import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function Home() {
  const div = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "inherit",
  };
  const img = {
    maxWidth: "100%",
  };
  const h3 = {
    margin: "0 auto",
    fontSize: "2rem",
    fontWeight: "lighter",
    textAlign: "start",
    padding: " 0 1.5rem",
  };

  const p = {
    margin: "0 auto",
    fontSize: "1rem",
    color: "#A3A3A3",
    textAlign: "start",
    padding: " 0 1.5rem",
  };
  return (
    <div style={div}>
      <div>
        <Link to="/beers" className="links">
          <img src={beers} alt="beer" style={img} />
          <h3 style={h3}>All Beers</h3>
        </Link>
        <p style={p}>
          Lorem fistrum llevame al sircoo te voy a borrar el cerito fistro
          pupita qué dise usteer. Llevame al sircoo amatomaa a wan a peich.
          Lorem fistrum llevame al sircoo te voy a borrar el cerito fistro
          pupita qué dise usteer.
        </p>
      </div>
      <div>
        <Link to="/random-beer" className="home-nav">
          <img src={newBeer} alt="beer" style={img} />
          <h3 style={h3}>Random Beer</h3>
        </Link>
        <p style={p}>
          Lorem fistrum llevame al sircoo te voy a borrar el cerito fistro
          pupita qué dise usteer. Llevame al sircoo amatomaa a wan a peich.
          Lorem fistrum llevame al sircoo te voy a borrar el cerito fistro
          pupita qué dise usteer.
        </p>
      </div>
      <div style={{ marginBottom: "0.8rem" }}>
        <Link to="/new-beer" className="home-nav">
          <img src={randomBeer} alt="beer" style={img} />
          <h3 style={h3}>New beer</h3>
        </Link>
        <p style={p}>
          Lorem fistrum llevame al sircoo te voy a borrar el cerito fistro
          pupita qué dise usteer. Llevame al sircoo amatomaa a wan a peich.
          Lorem fistrum llevame al sircoo te voy a borrar el cerito fistro
          pupita qué dise usteer.
        </p>
      </div>
    </div>
  );
}

export default Home;
