import React from "react";
import SectionsTitle from "../../../components/SectionsTitle/SectionsTitle";
import saladBg from "../../../assets/menu/saladBg.jpg";
import pizzaBg from "../../../assets/menu/pizzaBg.jpg";
import soupBg from "../../../assets/menu/soupBg.jpg";

const MenuCard = () => {
  return (
    <section>
      <SectionsTitle
        subHeading={"Should Try "}
        heading={"chef recommends"}
      ></SectionsTitle>
      <div className="flex flex-col-1 lg:flex-col-3 gap-3 justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={saladBg} alt="salad" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">Caeser Salad</h2>
            <p className="text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline text-yellow-400 border-yellow-500 border-0 mt-4 border-b-4">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={pizzaBg} alt="pizza" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">Caeser Salad</h2>
            <p className="text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline text-yellow-400 border-yellow-500 border-0 mt-4 border-b-4">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={soupBg} alt="soup" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">Caeser Salad</h2>
            <p className="text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline text-yellow-400 border-yellow-500 border-0 mt-4 border-b-4">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCard;
