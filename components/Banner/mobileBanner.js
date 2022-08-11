import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

function MobileBanner() {
  return (
    <>
      <div className={styles.backgroundGradientMobile} />
      <div>
        <motion.img
          src={"/assets/genericTemplate.png"}
          className={styles.mobileImg}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            type: "spring",
            repeat: Infinity,
          }}
        />
      </div>
    </>
  );
}

export default MobileBanner;
