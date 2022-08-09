import { style } from "@mui/system";
import { motion } from "framer-motion";
import React from "react";
import Header from "../components/Header/Header";
import styles from "../styles/Error.module.css";
function ErrorPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.gradient}>
          <img className={styles.phone} src={"/assets/greeting.png"} />
          <div className={styles.shadow} />
        </div>
        <h1 className={styles.title}>404 Page Not Found.</h1>
      </div>
    </div>
  );
}

export default ErrorPage;
