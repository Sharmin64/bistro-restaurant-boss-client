import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import banner3 from "../../../assets/menu/banner3.jpg";
import dessert from "../../../assets/menu/dessertBg.jpeg";
import pizzaImg from "../../../assets/menu/pizzaBg.jpg";
import soupImg from "../../../assets/menu/soupBg.jpg";
import saladImg from "../../../assets/menu/saladBg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionsTitle from "../../../components/SectionsTitle/SectionsTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const MenuBar = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu Bar</title>
      </Helmet>
      <Cover img={banner3} title="Our menu" />
      {/* main cover */}
      <SectionsTitle
        subHeading={"Do not miss"}
        heading={"Todays offer"}
      ></SectionsTitle>
      {/*offered menu items*/}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items  */}
      <MenuCategory
        items={desserts}
        title="Dessert"
        img={dessert}
      ></MenuCategory>
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>
      <MenuCategory items={soup} title="Soup" img={soupImg}></MenuCategory>
      <MenuCategory items={salad} title="Salad" img={saladImg}></MenuCategory>
    </div>
  );
};

export default MenuBar;
