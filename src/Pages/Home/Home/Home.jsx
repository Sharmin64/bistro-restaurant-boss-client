import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import BgImage from "../BgImage/BgImage";
import Menu from "../Menu/Menu";
import Featured from "../Featured/Featured";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <BgImage />
      <Menu />
      <Featured />
      <Reviews />
    </div>
  );
};

export default Home;
