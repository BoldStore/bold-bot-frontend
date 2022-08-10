import React from "react";
import styles from "./styles.module.css";
import { ScaleLoader } from "react-spinners";

function Loader() {
  return (
    <div className={styles.container}>
      <ScaleLoader color="var(--blue)" height={50} />
    </div>
  );
}

export default Loader;
