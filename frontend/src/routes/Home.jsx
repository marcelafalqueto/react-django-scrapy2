import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import CategoriesContainerComercials from "../components/Categories/CategoriesContainerComercials";
import CategoriesContainerDiscounts from "../components/Categories/CategoriesContainerDiscounts";
import CategoriesContainerResidencies from "../components/Categories/CategoriesContainerResidencies";
import CategoriesContainerByStates from "../components/Categories/CategoriesContainerByStates";
import BannerRegister from "../components/BannerRegister";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <CategoriesContainerDiscounts name="Descontos" />
      <CategoriesContainerResidencies name="Resideciais" />
      <CategoriesContainerComercials name="Comerciais" />
      <CategoriesContainerByStates name="Estados"/>
      <BannerRegister />
      <Footer />
    </div>
  );
};

export default Home;
