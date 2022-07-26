import React from "react";
import styles from "./styles.module.css";

function OverviewCard({ title, desc, gradient }) {
  return (
    <div className={styles.container}>
      <h3>Persistent Menu</h3>
      <p>
        Ice Breakers provide a way for users to start a conversation with a
        business with a list of frequently asked questions.
      </p>
    </div>
  );
}

export default OverviewCard;
