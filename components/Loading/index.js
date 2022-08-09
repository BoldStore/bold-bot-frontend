import React from "react";
import { ScaleLoader } from "react-spinners";
import styles from "./styles.module.css";
function Loading() {
  return (
    <div className={styles.container}>
      <ScaleLoader color={"var(--blue)"} />
    </div>
  );
}

export default Loading;
