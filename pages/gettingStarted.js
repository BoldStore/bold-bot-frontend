import React from "react";
import Header from "../components/Header/Header";
import Prerequisites from "../components/Prerequisites";
import styles from "../styles/Home.module.css";
import { prerequisites } from "../components/DashboardComponents/Lists/prerequisites";
function GettingStarted() {
  return (
    <div>
      <Header />
      <div className={styles.container2}>
        <h2>
          Things you need before{" "}
          <span style={{ color: "var(--blue)" }}>Getting Started.</span>
        </h2>
        {prerequisites.map((item, i) => (
          <Prerequisites
            key={i}
            title={item.title}
            desc={item.desc}
            isReverse={item.isReverse ?? false}
            imgArr={item.imgArr}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default GettingStarted;
