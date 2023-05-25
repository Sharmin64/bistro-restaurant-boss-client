import React, { useEffect, useState } from "react";
import SectionsTitle from "../../../components/SectionsTitle/SectionsTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="mb-12">
      <SectionsTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionsTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="justify-center ms-96">
        <button className="btn btn-outline border-0 mt-4 border-b-4 mx-auto ">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default Menu;
