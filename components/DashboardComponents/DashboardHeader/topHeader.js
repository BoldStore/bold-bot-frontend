import React from "react";
import styles from "./styles.module.css";
function TopHeader() {
  return (
    <div className={styles.navbar}>
      <h4 className={styles.logo}>BOLDBOT</h4>

      <div className={styles.linksContainer}>
        <img src="https://i.ibb.co/myvq6GR/aryan.jpg" className={styles.user} />
        <p>Aryan Teng</p>
      </div>
    </div>
  );
}

export default TopHeader;
