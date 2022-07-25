import { motion } from "framer-motion";
import React from "react";
import styles from "./styles.module.css";

function Feature({
  imgSrc,
  title,
  desc,
  isReverse,
  backgroundColor,
  backgroundImage,
}) {
  return (
    <div
      className={styles.container}
      style={{ flexDirection: isReverse ? "row-reverse" : "" }}
    >
      <div style={{ position: "relative" }}>
        <motion.img
          src={"/assets/IceBreakerSS.svg"}
          className={styles.img}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            type: "spring",
            repeat: Infinity,
          }}
        />
        <div
          className={styles.gradient}
          style={{
            left: isReverse ? "4.5rem" : "-1.8rem",
            backgroundColor: backgroundColor,
            backgroundImage: backgroundImage,
          }}
        ></div>
      </div>
      <div
        className={styles.infoContainer}
        style={{
          marginRight: isReverse ? "3rem" : "0rem",
          marginLeft: isReverse ? "0rem" : "3rem",
        }}
      >
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Feature;
