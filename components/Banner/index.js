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
          <img src="/assets/IceBreakerSS.svg" className={styles.img} />
          <img src="/assets/IceBreakerSS.svg" className={styles.img2} />
          <img src="/assets/IceBreakerSS.svg" className={styles.img} />
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
          <img src="/assets/IceBreakerSS.svg" className={styles.img} />
          <img src="/assets/IceBreakerSS.svg" className={styles.img} />
          <img src="/assets/IceBreakerSS.svg" className={styles.img} />
        </motion.div>
      </div>
      <div className={styles.info}>
        <p className={styles.para}>Automating your business, the bold way.</p>
        {/* <img src="/assets/BoldBotLogoBig.svg" className={styles.logo} /> */}
        <h1 className={styles.heading}>
          BOLD<span className={styles.gradientText}>BOT</span>
        </h1>
        <p className={styles.para}>
          Build lasting customer relationships through conversation. Messenger
          allows you to connect with billions of people in a channel they
          prefer—making business personal and convenient.
        </p>
        <FacebookButton />
      </div>
    </div>
  );
}

export default Banner;
