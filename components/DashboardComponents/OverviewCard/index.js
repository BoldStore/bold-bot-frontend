import React from "react";
import styles from "./styles.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DashboardButton from "../DashboardButton";
import Link from "next/link";
function OverviewCard({
  title,
  desc,
  percentage,
  used,
  total,
  pageHref,
  comingSoon,
}) {
  return (
    <Link href={pageHref} passHref={true}>
      <div className={styles.container}>
        <h5>{title}</h5>
        <p className={styles.desc}>{desc}</p>
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
                  pathColor: `#1DA1F2`,
                  textColor: "#1DA1F2",
                  trailColor: "#d6d6d6",
                })}
              />
            </div>
            <h5 className={styles.completeText}>
              {used}/{total} <span className={styles.complete}> Complete</span>
            </h5>
            {/* <DashboardButton
          text={"Upgrade Plan"}
          onClick={() => alert("wohooo")}
        /> */}
          </div>
        )}
      </div>
    </Link>
  );
}

export default OverviewCard;
