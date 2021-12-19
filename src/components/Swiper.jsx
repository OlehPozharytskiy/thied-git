// Core modules imports are same as usual
// import { Navigation, Pagination } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Button } from "./Button";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "./swiper.scss";
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module

// import React, { useRef, useState } from "react";

import SwiperCore, { Pagination, Autoplay } from "swiper";

SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);
// SwiperCore.use([Speed]);

function MySwiper() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, speed: 1800 }}
        pagination={{
          clickable: true,
        }}
        className="swiper__wrapper"
      >
        <SwiperSlide className="slide slide-first">
          <div className="slide-item">
            <h1 className="slide-title">The Future of Banking</h1>
            <p className="slide-paragraph">
              By combining our core engineering expertise and human-centric
              innovation capabilities, we help companies achieve total
              automation of customer interactions and channel ubiquity, enabled
              by APIs and AI-powered intelligent assistants.
            </p>
            <div className="slide-button">
              <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
              >
                <span className="btn--title">LEARN MORE</span>
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide slide-second">
          <div className="slide-item">
            <h1 className="slide-title">
              The Agility to Adapt, the Power to Compete
            </h1>
            <p className="slide-paragraph">
              We amplify the power of competition as a force for good—driving
              positive change that moves us to a more equitable future for
              society, organizations and their people innovation capabilities,
              we help companies achieve total automation of customer
              interactions and channel ubiquity, enabled by APIs and AI-powered
              intelligent assistants.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide slide-third">
          <div className="slide-item">
            <h1 className="slide-title">The Future of Banking</h1>
            <p className="slide-paragraph">
              By combining our core engineering expertise and human-centric
              innovation capabilities, we help companies achieve total
              automation of customer interactions and channel ubiquity, enabled
              by APIs and AI-powered intelligent assistants.
            </p>
            <div className="slide-button">
              <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
              >
                <span className="btn--title">LEARN MORE</span>
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide slide-four">
          <div className="slide-item">
            <h1 className="slide-title">The Future of Banking</h1>
            <p className="slide-paragraph">
              By combining our core engineering expertise and human-centric
              innovation capabilities, we help companies achieve total
              automation of customer interactions and channel ubiquity, enabled
              by APIs and AI-powered intelligent assistants innovation
              capabilities, we help companies achieve total automation of
              customer interactions and channel ubiquity, enabled by APIs and
              AI-powered intelligent assistants.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default MySwiper;
