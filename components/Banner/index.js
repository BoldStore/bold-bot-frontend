import React from "react";
import styles from "./styles.module.css";
function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.imagesFlex}>
        <div className={styles.imagesColumn} style={{ marginTop: "-7rem" }}>
          <img src="/assets/IceBreakerSS.svg" className={styles.img} />
          <img src="/assets/IceBreakerSS.svg" className={styles.img} />
        </div>
        <div className={styles.imagesColumn}>
          <img src="/assets/IceBreakerSS.svg" className={styles.img} />
          <img src="/assets/IceBreakerSS.svg" className={styles.img} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
