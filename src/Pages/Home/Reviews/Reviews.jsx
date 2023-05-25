import React, { useEffect, useState } from "react";
import SectionsTitle from "../../../components/SectionsTitle/SectionsTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
//? Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-20">
      <SectionsTitle
        subHeading={"What Our Client Say"}
        heading={"Testimonials"}
      ></SectionsTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center justify-center m-24">
              <Rating
                style={{ maxWidth: 250 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteLeft style={{ fontSize: "4rem" }}></FaQuoteLeft>
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
