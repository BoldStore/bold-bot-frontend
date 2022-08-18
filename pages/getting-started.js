import React from "react";
import Header from "../components/Header/Header";
import Prerequisites from "../components/Prerequisites";
import styles from "../styles/Home.module.css";
import { prerequisites } from "../components/DashboardComponents/Lists/prerequisites";
import SEO from "../components/SEO";

function GettingStarted() {
  return (
    <>
      <SEO title={"Getting Started"} />
      <Header />
      <div className={styles.gettingStartedContainer}>
        <h2>
          Things you need before
          <span style={{ color: "var(--blue)" }}> Getting Started.</span>
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
    </>
  );
}

export default GettingStarted;
