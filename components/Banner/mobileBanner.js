import React from "react";
import styles from "./styles.module.css";

function MobileBanner() {
  return (
    <>
      <div className={styles.backgroundGradientMobile} />
      <div>
        <img src="/assets/iceBreaker.png" className={styles.mobileImg} />
      </div>
    </>
  );
}

export default MobileBanner;
