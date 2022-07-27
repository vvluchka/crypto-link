import React from "react";
import CurrencyData from "./CurrencyData";
import CurrencyCard from "./CurrencyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from "swiper";

import "./styles.scss";

import "swiper/css/navigation";

const breakpoints = {
  550: {
    enabled: true,
    slidesPerView: 2,
  },
  1024: {
    enabled: true,
    slidesPerView: 3,
  },
  1200: {
    slidesPerView: 4,
    enabled: false,
  },
};

function CurrencyCards(props) {
  const cards = CurrencyData.map((card) => {
    return (
      <SwiperSlide key={card.id}>
        <CurrencyCard card={card} />
      </SwiperSlide>
    );
  });
  return (
    <div className="grid-container">
      <Swiper
        enabled={true}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={breakpoints}
        pagination={{
          dynamicBullets: true ,
        }}
        modules={[Pagination]}
        className="mySwiper"

      >
        {cards}
      </Swiper>
    </div>
  );
}

export default CurrencyCards;
