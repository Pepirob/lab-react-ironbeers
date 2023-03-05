import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { BeatLoader } from "react-spinners";

function BeersDetails() {
  const navigate = useNavigate();
  const idParams = useParams();
  const { id } = idParams;

  const [details, setDetails] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      setDetails(response.data);
      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };

  if (isFetching === true) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BeatLoader color="#36d7b7" />
      </div>
    );
  }

  //Styles
  const mainDiv = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3rem",
    minWidth: "100%",
  };

  const h3 = {
    fontSize: "1.5rem",
    fontWeight: "lighter",
    margin: "0",
  };

  const pTagline = {
    fontSize: "1.2rem",
    margin: "0 ",
    color: "#959595",
    fontWeight: "bold",
    paddingTop: "0.5rem",
  };

  return (
    <div>
      <Header />
      <div style={mainDiv}>
        <img src={details.image_url} alt="beer" width="60rem" />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1rem",
            minWidth: "90%",
          }}
        >
          <div>
            <h3 style={h3}>{details.name} </h3>
            <p style={pTagline}>{details.tagline} </p>
          </div>
          <div>
            <p style={pTagline}>{details.attenuation_level} </p>
            <p>
              <b>{details.first_brewed}</b>
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "1rem",
            minWidth: "70%",
          }}
        >
          <p style={{ fontSize: "1rem", margin: "0" }}>{details.description}</p>
          <p style={pTagline}>
            {details.contributed_by === undefined
              ? details.contributed_by
              : details.contributed_by.slice(
                  0,
                  details.contributed_by.indexOf("<")
                )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BeersDetails;
