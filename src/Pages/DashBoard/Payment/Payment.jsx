import React from "react";
import SectionsTitle from "../../../components/SectionsTitle/SectionsTitle";
import {loadStripe} from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import {Elements} from "@stripe/react-stripe-js";

//todo: TODO: provide publishable key
const stripePromise = loadStripe("");
const Payment = () => {
  return (
    <div>
      <SectionsTitle
        subHeading={"Please Proccess Your Payment"}
        heading={"Payment Gateway"}
      />

      <h1>pay ment gate way will be paid here;</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
