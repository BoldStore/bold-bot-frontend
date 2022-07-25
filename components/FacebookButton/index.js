import React from "react";
import styles from "./styles.module.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

function FacebookButton() {
  return (
    <button className={styles.button}>
      <FacebookRoundedIcon
        sx={{ color: "var(--white)" }}
        className={styles.icon}
      />
      <p>Continue With Facebook</p>
    </button>
  );
}

export default FacebookButton;
