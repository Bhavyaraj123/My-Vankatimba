import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Card from "./components/Card";
import Timings from "./sections/Timings";
import Events from "./sections/Events";
import Gallery from "./pages/Gallery";
import Donation from "./sections/Donation";
import Map from "./components/Map";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Card />
              <Timings />
              <Events />
              <Donation/>
              <Map/>
            </>
          }
        />
        <Route path="/card" element={<Card />} />
        <Route path="/timings" element={<Timings />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
