import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="food" />
      </figure>
      <p className="right-2 px-4 mr-4 mt-4 absolute bg-slate-800 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-yellow-400 bg-slate-100 border-0 border-b-8">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
