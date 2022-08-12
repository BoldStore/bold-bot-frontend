import { motion } from "framer-motion";
import React from "react";
import Header from "../components/Header/Header";
import SEO from "../components/SEO";
import styles from "../styles/Error.module.css";

function Page500() {
  return (
    <>
      <SEO title={"Error: 500"} />
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
            src={"/assets/Erroriphone.png"}
          />
        </div>
        <h2 className={styles.title}>
          <span style={{ color: "var(--blue)" }}>500</span> Internal Server
          Error.
        </h2>
      </div>
    </>
  );
}

export default Page500;
