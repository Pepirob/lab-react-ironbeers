import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
function NewBeer() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBby, setContributedBby] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newBeer = {
      name,
      tagline,
      image_url: imageUrl,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBby,
    };
    try {
      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      navigate("/beers");
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  return (
    <div>
      <Header />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Name</Form.Label>
          <br />
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="tagline">Tagline</Form.Label>
          <br />
          <Form.Control
            type="text"
            name="tagline"
            placeholder="Enter tagline"
            onChange={(event) => setTagline(event.target.value)}
            value={tagline}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="image_url">Image</Form.Label>
          <br />
          <Form.Control
            type="text"
            name="image_url"
            placeholder="Enter url"
            onChange={(event) => setImageUrl(event.target.value)}
            value={imageUrl}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="description">Description</Form.Label>
          <br />
          <Form.Control
            as="textarea"
            rows={4}
            name="description"
            placeholder="Enter description"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="first_brewed">First Brewed</Form.Label>
          <br />
          <Form.Control
            type="text"
            name="first_brewed "
            placeholder="Enter creation date "
            onChange={(event) => setFirstBrewed(event.target.value)}
            value={firstBrewed}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="brewers_tips">Brewer tips</Form.Label>
          <br />
          <Form.Control
            type="text"
            name="brewers_tips"
            placeholder="Enter tip "
            onChange={(event) => setBrewersTips(event.target.value)}
            value={brewersTips}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="attenuation_level">Attenuation Level</Form.Label>
          <br />
          <Form.Control
            type="number"
            name="attenuation_level"
            placeholder="Enter attenuation level "
            onChange={(event) => setAttenuationLevel(event.target.value)}
            value={attenuationLevel}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="contributed_by">Contributed By</Form.Label>
          <br />
          <Form.Control
            type="text"
            name="contributed_by"
            placeholder="Enter creator"
            onChange={(event) => setContributedBby(event.target.value)}
            value={contributedBby}
          />
          <br />
        </Form.Group>
        <Button type="submit" onClick={handleSubmit} variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default NewBeer;
