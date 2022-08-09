import React from "react";
import styles from "./styles.module.css";
import DashboardButton from "../DashboardComponents/DashboardButton";
import EmojiPeopleRoundedIcon from "@mui/icons-material/EmojiPeopleRounded";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";

function Plan(planName, planDesc, planPrice) {
  return (
    <div className={styles.container}>
      <div className={styles.packName}>
        <h5>Starter Pack</h5>
        <div>
          <EmojiPeopleRoundedIcon className={styles.icon} />
          <AcUnitRoundedIcon className={styles.icon} />
        </div>
      </div>
      <h6>
        The persistent menu removes the miscommunication quotient by providing
        the option of starting over or redirecting to a new topic.
      </h6>
      <div className={styles.priceContainer}>
        <h6>$500/month</h6>
        <DashboardButton text={"Buy Plan"} />
      </div>
    </div>
  );
}

export default Plan;
