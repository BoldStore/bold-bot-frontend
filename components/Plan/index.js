import React from "react";
import styles from "./styles.module.css";
import DashboardButton from "../DashboardComponents/DashboardButton";

function Plan(planName, planDesc, planPrice) {
  return (
    <div className={styles.container}>
      <h5>Starter Pack</h5>
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
