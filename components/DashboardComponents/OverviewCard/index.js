import React from "react";
import styles from "./styles.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";

function OverviewCard({ title, used, total, pageHref, comingSoon }) {
  return (
    <Link href={pageHref} passHref={true}>
      <div className={styles.container}>
        <div className={styles.titleFlex}>
          <h5>{title}</h5>
          <h6 className={styles.completeText}>
            Status: <span className={styles.complete}>Inactive</span>
          </h6>
        </div>
        {comingSoon ? (
          <></>
        ) : (
          <div className={styles.flex}>
            <div className={styles.percentage}>
              <CircularProgressbar
                value={Math.round((used / total) * 100)}
                text={`${Math.round((used / total) * 100)}%`}
                strokeWidth={1}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "1.2rem",
                  pathTransitionDuration: 0.5,
                  pathColor: "var(--blue)",
                  textColor: "var(--blue)",
                  trailColor: "#d6d6d6",
                })}
              />
            </div>
            <h6 className={styles.completeText}>
              Interactions Completed :
              <span className={styles.complete}> 0</span>
            </h6>
          </div>
        )}
      </div>
    </Link>
  );
}

export default OverviewCard;
