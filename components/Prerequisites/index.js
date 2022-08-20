import React from "react";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";

function Prerequisites({ isReverse, title, imgArr, desc, link, steps }) {
  return (
    <div
      className={styles.container}
      style={{ flexDirection: isReverse ? "row-reverse" : "row" }}
    >
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <ol style={{ paddingLeft: "1rem" }}>
          {steps.map((item, i) => (
            <li key={i} className={styles.text}>
              {item}
            </li>
          ))}
        </ol>
        <a href={link} target="_blank" rel="noreferrer">
          <p
            style={{
              color: "var(--blue)",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Instagram&apos;s Tutorial
          </p>
        </a>
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
          {imgArr?.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                key={i}
                src={item}
                className={styles.img}
                style={{
                  marginRight: isReverse && "auto",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Prerequisites;
