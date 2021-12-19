import React from "react";
import Getstarted from "../components/Getstarted";
import MySwiper from "../components/Swiper";
import Cards from "../components/Cards";
import { Form } from "../components/Form";
import Map from "../components/Map";
import About from "../components/About";

function Main() {
  return (
    <div className="content-container">
      <Getstarted />
      <MySwiper />
      <About />
      <Map />
      <Cards />
      <Form />
    </div>
  );
}

export default Main;
