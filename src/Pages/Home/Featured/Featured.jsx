import React from "react";
import SectionsTitle from "../../../components/SectionsTitle/SectionsTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-10 my-10">
      <SectionsTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionsTitle>
      <div className="md:flex justify-center items-center pb-20 bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
          <p>August 20, 2020</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quos placeat ad voluptas consequuntur fugiat modi dolorum eum,
            explicabo autem sint. Aliquid unde magnam voluptates quisquam aut
            commodi dolores velit asperiores. Enim, nemo! Nam, explicabo eos!
            Iusto expedita ea eveniet ipsum, dolorum quis totam quisquam, minus
            error repudiandae tenetur corporis?
          </p>
          <div>
            <button className="btn btn-outline border-0 mt-4 border-b-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
