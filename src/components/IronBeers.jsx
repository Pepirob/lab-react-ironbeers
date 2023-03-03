import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import Beers from "../pages/Beers";
import RandomBeer from "../pages/RandomBeer";
import NewBeer from "../pages/NewBeer";
import Error from "../pages/Error";
import BeersDetails from "../pages/BeersDetails";

function IronBeers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:id" element={<BeersDetails />} />

        {/* error routes */}
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
}

export default IronBeers;
