import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function Prerequisites({ isReverse, title, imgArr, desc, link }) {
  return (
    <div
      className={styles.container}
      style={{ flexDirection: isReverse == true ? "row-reverse" : "row" }}
    >
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{desc}</p>
        <Link href={link} passHref={true}>
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
          {imgArr?.map((item, i) => (
            <SwiperSlide key={i}>
              <img
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
