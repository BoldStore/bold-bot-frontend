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
  id,
}) {
  return (
    <div
      className={styles.container}
      style={{ flexDirection: isReverse ? "row-reverse" : "" }}
      id={id}
    >
      <div className={styles.phoneComponent} style={{ position: "relative" }}>
        <motion.img
          src={imgSrc}
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
            left: isReverse ? "4.5rem" : "-1.0rem",
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
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
          className={styles.heading}
        >
          {title}
        </motion.h3>
        <motion.h6
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.75, duration: 1, type: "spring" }}
        >
          {desc}
        </motion.h6>
      </div>
    </div>
  );
}

export default Feature;
