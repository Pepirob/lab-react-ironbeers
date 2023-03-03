import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
    return <h3>...buscando</h3>;
  }

  return (
    <div>
      <div>
        <div>
          <img src={details.image_url} alt="beer" width="60rem" />
        </div>
        <div>
          <h3>{details.name} </h3>
          <p>{details.tagline} </p>
          <p>{details.first_brewed} </p>
          <p>{details.attenuation_level} </p>
          <p>{details.description} </p>
          <p>Created by: {details.contributed_by} </p>
        </div>
      </div>
    </div>
  );
}

export default BeersDetails;
