import React from "react";
import Header from "../components/Header/Header";
import Prerequisites from "../components/Prerequisites";
import styles from "../styles/Home.module.css";
function GettingStarted() {
  return (
    <div>
      <Header />
      <div className={styles.container2}>
        <h2>
          Things you need before{" "}
          <span style={{ color: "var(--blue)" }}>Getting Started.</span>
        </h2>
        <Prerequisites />
        <Prerequisites isReverse={true} />
      </div>
    </div>
  );
}

export default GettingStarted;
