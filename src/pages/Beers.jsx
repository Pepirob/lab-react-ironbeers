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
    flexDirection: "column",
  };
  const beerCard = {
    display: "flex",
    flexDirection: "row",
    boxShadow: "0px 0px 5px #ccc",
    margin: "1rem 0",
    padding: "0.5rem 0",
    maxHeight: "200rem",
  };
  const divImg = {
    display: "flex",
    width: "30%",
    height: "15rem",
    justifyContent: "center",
  };

  return (
    <div>
      <Header />
      <div style={beerGallery}>
        {allBeers.map((beer) => {
          return (
            <div key={beer._id} style={beerCard}>
              <div style={divImg}>
                <Link to={`${beer._id}`} className="links">
                  <img
                    src={beer.image_url}
                    alt="beer"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </Link>
              </div>
              <div
                style={{
                  width: "60%",
                  height: "15rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Link to={`${beer._id}`} className="links">
                  <h3
                    style={{
                      fontSize: "2rem",
                      fontWeight: "lighter",
                      margin: "0",
                    }}
                  >
                    {beer.name}
                  </h3>
                </Link>
                <p
                  style={{
                    fontSize: "1.2rem",
                    margin: "0 ",
                    color: "#959595",
                    fontWeight: "bold",
                    paddingTop: "1rem 0",
                  }}
                >
                  {beer.tagline}
                </p>

                <p
                  style={{
                    margin: "0",
                    padding: "0.5rem 0",
                    fontSize: ".8rem",
                  }}
                >
                  <b>Created by: </b>
                  {beer.contributed_by === undefined
                    ? beer.contributed_by
                    : beer.contributed_by.slice(
                        0,
                        beer.contributed_by.indexOf("<")
                      )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Beers;
