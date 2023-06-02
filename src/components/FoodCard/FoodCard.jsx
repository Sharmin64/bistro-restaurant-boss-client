import React from "react";
import {useContext} from "react";
import {AuthContext} from "./../../Providers/AuthProvider";
import Swal from "sweetalert2";
import {useLocation, useNavigate} from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
  const {name, image, price, recipe, _id} = item;
  const {user} = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5001/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); //?refetch cart to update the number of items in the cart
            Swal.fire({
              imageUrl: "https://i.ibb.co/6Rs68kX/doll-6.jpg",
              title: "Food added to the cart",
              imageHeight: 500,
              imageAlt: "A tall image",
              timer: 2000,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Yeay",
            "I am happy that You jumped into login page to buy food.",
            "success"
          );
          navigate("/login", {state: {from: location}});
        }
      });
    }
  };
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
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-yellow-400 bg-slate-100 border-0 border-b-8"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
