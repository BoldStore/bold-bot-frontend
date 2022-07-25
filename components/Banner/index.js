import { motion } from "framer-motion";
import React from "react";
import FacebookButton from "../FacebookButton";
import styles from "./styles.module.css";

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.imagesFlex}>
        <motion.div
          className={styles.imagesColumnLeft}
          // initial={{ y: 200 }}
          // whileInView={{ y: 0 }}
          // transition={{
          //   type: "smooth",
          //   repeat: Infinity,
          //   repeatType: "mirror",
          //   duration: 2,
          //   repeatDelay: 5,
          // }}
        >
          <img src="/assets/IceBreakerSS.svg" className={styles.img} />
          <img src="/assets/IceBreakerSS.svg" className={styles.img2} />
        </motion.div>
        <motion.div
          className={styles.imagesColumnRight}
          // initial={{ y: -200 }}
          // whileInView={{ y: 0 }}
          // transition={{
          //   type: "smooth",
          //   repeat: Infinity,
          //   repeatType: "mirror",
          //   duration: 2,
          //   repeatDelay: 5,
          //   delay: 0.5,
          // }}
        >
          <img src="/assets/IceBreakerSS.svg" className={styles.img} />
          <img src="/assets/IceBreakerSS.svg" className={styles.img} />
        </motion.div>
      </div>
      <div className={styles.info}>
        <p className={styles.para}>Automating your business, the bold way.</p>
        <img src="/assets/BoldBotLogoBig.svg" className={styles.logo} />
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
