import React from "react";
import styles from "./styles.module.css";
function DashboardButton({ onClick, text }) {
  return (
    <div className={styles.container} onClick={() => onClick()}>
      <p>{text}</p>
    </div>
  );
}

export default DashboardButton;
