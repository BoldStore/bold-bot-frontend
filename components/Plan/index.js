import React from "react";
import styles from "./styles.module.css";
import DashboardButton from "../DashboardComponents/DashboardButton";
import { iconArr } from "./iconArr";

function Plan({ planName, planDesc, planPrice, icons, noButton }) {
  return (
    <div className={styles.container}>
      <div className={styles.packName}>
        <h5>{planName}</h5>
        <div>
          {icons.map((item, i) => {
            return <span key={i}>{iconArr[item]}</span>;
          })}
        </div>
      </div>
      <p>{planDesc}</p>
      <div className={styles.priceContainer}>
        <h6>{planPrice}/month</h6>
        {!noButton && <DashboardButton text={"Buy Plan"} />}
      </div>
    </div>
  );
}

export default Plan;
