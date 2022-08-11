/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import FacebookButton from "../FacebookButton";
import styles from "./styles.module.css";
import MobileBanner from "./mobileBanner";

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.mobileBanner}>
        <MobileBanner />
      </div>
      <div className={styles.imagesFlex}>
        <div className={styles.backgroundGradient} />
        <motion.div
          className={styles.imagesColumnLeft}
          initial={{ y: 150 }}
          animate={{ y: -150 }}
          transition={{
            type: "smooth",
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            repeatDelay: 5,
          }}
        >
          <img
            src="/assets/genericTemplate.png"
            className={styles.img}
            alt="Ice Breaker"
          />
          <img
            src="/assets/iceBreaker.png"
            className={styles.img2}
            alt="Ice Breaker"
          />
          <img
            src="/assets/quickReplies.png"
            className={styles.img}
            alt="Ice Breaker"
          />
        </motion.div>
        <motion.div
          className={styles.imagesColumnRight}
          initial={{ y: -250 }}
          animate={{ y: 200 }}
          transition={{
            type: "smooth",
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            repeatDelay: 5,
            delay: 0.5,
          }}
        >
          <img
            src="/assets/genericTemplate.png"
            className={styles.img}
            alt="Ice Breaker"
          />
          <img
            src="/assets/greeting.png"
            className={styles.img}
            alt="Ice Breaker"
          />
          <img
            src="/assets/persistentMenu.png"
            className={styles.img}
            alt="Ice Breaker"
          />
        </motion.div>
      </div>
      <div className={styles.info}>
        <p className={styles.p}>Automate your business, the bold way.</p>
        <h1 className={styles.heading}>
          BOLD<span className={styles.gradientText}>bot</span>
        </h1>
        <p className={styles.para}>
          BOLDbot is the next step in automating customer service for Instagram
          businesses. It levels up the professionalism of your business by
          increasing efficacy and simplifying interaction with your consumer.
        </p>
        <FacebookButton />
      </div>
    </div>
  );
}

export default Banner;
