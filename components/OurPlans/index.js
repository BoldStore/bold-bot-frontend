import React from "react";
import Plan from "../Plan";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { plans } from "./plans";

function OurPlans() {
  return (
    <div className={styles.container} id={"OurPlans"}>
      <h3>Our Plans</h3>
      <div className={styles.plansContainer}>
        {plans.map((item, i) => {
          return (
            <Plan
              key={i}
              planName={item.planName}
              planDesc={item.planDesc}
              planPrice={item.planPrice}
              icons={item.icons}
            />
          );
        })}
      </div>
      <div className={styles.plansContainerMobile}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={true}
          modules={[Pagination]}
          className={styles.swiper}
        >
          {plans.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Plan
                  key={i}
                  planName={item.planName}
                  planDesc={item.planDesc}
                  planPrice={item.planPrice}
                  icons={item.icons}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default OurPlans;
