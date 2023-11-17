import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarouselProperties from "../components/CarouselProperties";
import AuctionsInfo from "../components/AuctionsInfo";
import GoogleMap from "../components/GoogleMap";
import slides from "../components/mock.json"

const SearchDetails = () => {
  return (
    <>
      <Navbar />
      <CarouselProperties slides={slides} />
      <AuctionsInfo />
      <GoogleMap />
      <Footer />
    </>
  );
};

export default SearchDetails;
