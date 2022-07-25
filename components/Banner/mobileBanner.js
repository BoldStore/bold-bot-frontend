import React from "react";
import styles from "./styles.module.css";
function MobileBanner() {
  return (
    <div>
      <div className={styles.backgroundGradient} />
      <div>
        <img src="/assets/IceBreakerSS.svg" className={styles.mobileImg} />
      </div>
    </div>
  );
}

export default MobileBanner;
