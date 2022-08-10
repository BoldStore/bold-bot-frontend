import { style } from "@mui/system";
import { motion } from "framer-motion";
import React from "react";
import Header from "../components/Header/Header";
import styles from "../styles/Error.module.css";
function Page500() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.gradient}>
          <motion.img
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              type: "spring",
              repeat: Infinity,
            }}
            className={styles.phone}
            src={"/assets/404iPhone.png"}
          />
        </div>
        <h2 className={styles.title}>500 Internal Server Error.</h2>
      </div>
    </div>
  );
}

export default Page500;
