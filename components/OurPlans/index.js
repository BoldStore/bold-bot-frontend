import React from "react";
import Plan from "../Plan";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function OurPlans({ center }) {
  return (
    <div className={styles.container}>
      <h3 style={{ textAlign: center && "center" }}>Our Plans</h3>
      <div className={styles.plansContainer}>
        <Plan />
        <Plan />
        <Plan />
      </div>
      <div className={styles.plansContainerMobile}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          className={styles.swiper}
        >
          <SwiperSlide>
            <Plan />
          </SwiperSlide>
          <SwiperSlide>
            <Plan />
          </SwiperSlide>
          <SwiperSlide>
            <Plan />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default OurPlans;
