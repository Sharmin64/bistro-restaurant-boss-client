import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import banner3 from "../../../assets/menu/banner3.jpg";
import Menu from "../../Home/Menu/Menu";

const MenuBar = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu Bar</title>
      </Helmet>
      <Cover img={banner3} title="Our menu" />
      <Menu />
      <Cover img={banner3} title="Our menu" />
      <Menu />
      <Cover img={banner3} title="Our menu" />
      <Menu />
    </div>
  );
};

export default MenuBar;
