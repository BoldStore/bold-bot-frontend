import React from "react";
import styles from "./styles.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DashboardButton from "../DashboardButton";
function OverviewCard({ title, desc, gradient }) {
  return (
    <div className={styles.container}>
      <h4>Persistent Menu</h4>
      <p className={styles.desc}>
        Ice Breakers provide a way for users to start a conversation with a
        business with a list of frequently asked questions.
      </p>
      <div className={styles.flex}>
        <div className={styles.percentage}>
          <CircularProgressbar
            value={100}
            text={`${Math.round(100 ?? 0)}%`}
            strokeWidth={1}
            styles={buildStyles({
              strokeLinecap: "butt",
              textSize: "1.2rem",
              pathTransitionDuration: 0.5,
              pathColor: `#1DA1F2`,
              textColor: "#1DA1F2",
              trailColor: "#d6d6d6",
            })}
          />
        </div>
        <h5 className={styles.completeText}>
          5/5 <span className={styles.complete}> Complete</span>
        </h5>
        {/* <DashboardButton
          text={"Upgrade Plan"}
          onClick={() => alert("wohooo")}
        /> */}
      </div>
    </div>
  );
}

export default OverviewCard;
