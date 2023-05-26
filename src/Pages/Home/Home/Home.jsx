import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import BgImage from "../BgImage/BgImage";
import Menu from "../Menu/Menu";
import Featured from "../Featured/Featured";
import Reviews from "../Reviews/Reviews";
import Contact from "../Contact/Contact";
import MenuCard from "../MenuCard/MenuCard";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <BgImage />
      <Menu />
      <Contact />
      <MenuCard />
      <Featured />
      <Reviews />
    </div>
  );
};

export default Home;
