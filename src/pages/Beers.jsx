import Header from "../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";

function Beers() {
  const navigate = useNavigate();
  const [allBeers, setAllBeers] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response);
      setAllBeers(response.data);
      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };
  if (isFetching === true) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BounceLoader color="#ff0000" />
      </div>
    );
  }
  const beerGallery = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  };

  return (
    <div>
      <Header />
      <div style={beerGallery}>
        {allBeers.map((beer) => {
          return (
            <div key={beer._id} style={{ padding: "4rem" }}>
              <div>
                <Link to={`${beer._id}`}>
                  <img src={beer.image_url} alt="beer" width="60rem" />
                </Link>
              </div>
              <div>
                <Link to={`${beer._id}`}>
                  <h3>{beer.name} </h3>
                </Link>
                <p>{beer.tagline} </p>
                <p>Created by: {beer.contributed_by} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Beers;
