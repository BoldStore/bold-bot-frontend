import React from "react";
import styles from "./styles.module.css";
function DashboardButton({ onClick, text }) {
  return (
    <div className={styles.container} onClick={() => onClick()}>
      {text}
    </div>
  );
}

export default DashboardButton;
