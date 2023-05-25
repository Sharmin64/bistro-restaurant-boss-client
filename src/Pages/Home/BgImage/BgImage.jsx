import React from "react";
import chefService from "../../../assets/home/chefService.jpg";

const BgImage = () => {
  return (
    <>
      <div className="relative mb-8 mt-5">
        {/* Background Image */}
        <img
          className="w-full h-full object-cover"
          src={chefService}
          alt="Background"
        />

        {/* Overlay */}
        <div className="absolute top-16 left-40 w-9/12 h-64 items-center justify-center  bg-white mx-auto opacity-32 origin-center translate-y-5"></div>

        {/* Content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-gray-500">
          <h1 className="text-4xl font-bold mb-4">Bistro Boss</h1>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum <br /> deserunt ratione
            dolor officiis praesentium! Deserunt magni aperiam dolor <br />
            eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </>
  );
};

export default BgImage;
