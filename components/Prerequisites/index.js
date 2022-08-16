import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function Prerequisites({ isReverse }) {
  return (
    <div
      className={styles.container}
      style={{ flexDirection: isReverse == true ? "row-reverse" : "row" }}
    >
      <div className={styles.info}>
        <h3 className={styles.title}>Business or a Professional Account.</h3>
        <p className={styles.text}>
          Ice Breakers provide a way for users to start a conversation with a
          business with a list of frequently asked questions. A maximum of 4
          questions can be set via the Ice Breaker API. Starting Oct 19th, 2021,
          Ice Breakers supports localization to allow businesses to set custom
          questions depending on the user locale. The API will have a new format
          and we encourage developers to leverage the new format to set and
          retrieve Ice Breakers information. The list of supported locales can
          be found here.
        </p>
        <Link href={"/"} passHref={true}>
          <p
            style={{
              color: "var(--blue)",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Facebook's tutorial
          </p>
        </Link>
      </div>
      <div className={styles.swiperContainer}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={false}
          pagination={true}
          modules={[Pagination]}
          className={styles.swiper}
        >
          <SwiperSlide>
            <img
              src={"/assets/Prerequisites/tapSettings.png"}
              className={styles.img}
              style={{
                marginRight: isReverse && "auto",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"/assets/Prerequisites/tapSettings.png"}
              className={styles.img}
              style={{
                marginRight: isReverse && "auto",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"/assets/Prerequisites/tapSettings.png"}
              className={styles.img}
              style={{
                marginRight: isReverse && "auto",
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Prerequisites;
