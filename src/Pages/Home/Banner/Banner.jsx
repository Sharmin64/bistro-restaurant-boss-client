import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import homeA from "../../../assets/home/homeA.jpg";
import homeB from "../../../assets/home/homeB.jpg";
import homeC from "../../../assets/home/homeC.png";
import homeD from "../../../assets/home/homeD.jpg";
import homeE from "../../../assets/home/homeE.png";
import homeF from "../../../assets/home/homeF.png";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={homeA} />
      </div>
      <div>
        <img src={homeB} />
      </div>
      <div>
        <img src={homeC} />
      </div>
      <div>
        <img src={homeD} />
      </div>
      <div>
        <img src={homeE} />
      </div>
      <div>
        <img src={homeF} />
      </div>
    </Carousel>
  );
};

export default Banner;
