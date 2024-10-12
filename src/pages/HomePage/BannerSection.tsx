import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./banner.css";

// import required modules
import { Autoplay } from "swiper/modules";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { primaryButton } from "../../config/themeConfig";
const BannerSection: React.FC = () => {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Swiper
        spaceBetween={30}
        speed={1600}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/4WZ3BYN/Smart-office-and-coworking-place-Krasnodar-1.jpg"
            alt="slider Img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/mT2t0Kc/ec0dc51a-ae78-44b4-975c-972a51f4cf73.jpg"
            alt="slider Img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/B37SP2P/9eafc898-73c5-449e-9184-8997ec94f32a.jpg"
            alt="slider Img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/B6zZxkb/Orange-Poland-Offices-Warsaw-Office-Snapshots.jpg"
            alt="slider Img"
          />
        </SwiperSlide>
      </Swiper>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "#102d2e8c",
          zIndex: 10,
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "95%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap : "14px"
          }}
        >
          <h1 className="text-5xl text-center">
            Book Your Ideal Meeting Room with Ease.
          </h1>
          <h3 className="text-3xl text-center">
            Efficient, hassle-free room booking for all your meeting needs
          </h3>
          <Link style={{ marginTop: "10px" }} to={"/rooms"}>
            <Button type="primary" style={primaryButton} className="h-14 w-32 md:text-xl hover:scale-110 ">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;


// https://i.ibb.co.com/B37SP2P/9eafc898-73c5-449e-9184-8997ec94f32a.jpg
// https://i.ibb.co.com/mT2t0Kc/ec0dc51a-ae78-44b4-975c-972a51f4cf73.jpg
// https://i.ibb.co.com/BrZ3pjX/ce7875fa-1ccb-40a6-aeda-a35afb6d66e2.jpg
// https://i.ibb.co.com/Kw7Rs7Z/IT.jpg
// https://i.ibb.co.com/4WZ3BYN/Smart-office-and-coworking-place-Krasnodar-1.jpg
// https://i.ibb.co.com/B6zZxkb/Orange-Poland-Offices-Warsaw-Office-Snapshots.jpg
// https://i.ibb.co.com/Fg52m0F/Smart-office-and-coworking-place-Krasnodar.jpg
