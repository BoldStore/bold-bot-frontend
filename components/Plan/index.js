import React from "react";
import styles from "./styles.module.css";
import DashboardButton from "../DashboardComponents/DashboardButton";
import { iconArr } from "./iconArr";

function Plan({ planName, planDesc, planPrice, icons }) {
  return (
    <div className={styles.container}>
      <div className={styles.packName}>
        <h5>{planName}</h5>
        <div>
          {icons.map((item) => {
            return iconArr[item];
          })}
          {/* <EmojiPeopleRoundedIcon className={styles.icon} />
          <AcUnitRoundedIcon className={styles.icon} /> */}
        </div>
      </div>
      <h6>{planDesc}</h6>
      <div className={styles.priceContainer}>
        <h6>{planPrice}/month</h6>
        <DashboardButton text={"Buy Plan"} />
      </div>
    </div>
  );
}

export default Plan;
