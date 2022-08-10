import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

function Loader() {
  return (
    <div className={styles.container}>
      <h1>
        BOLD<span style={{ color: "var(--blue)" }}>bot</span>
      </h1>
      <div className={styles.loaderParent}>
        <motion.div
          className={styles.loaderChild}
          animate={{
            x: [-50, 200, -50],
          }}
          transition={{
            duration: 1.25,
            ease: "easeInOut",
            repeat: Infinity,
            type: "spring",
          }}
        />
      </div>
    </div>
  );
}

export default Loader;
