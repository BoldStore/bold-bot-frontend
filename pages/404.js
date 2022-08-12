import { motion } from "framer-motion";
import React from "react";
import Header from "../components/Header/Header";
import SEO from "../components/SEO";
import styles from "../styles/Error.module.css";

function Page404() {
  return (
    <>
      <SEO title={"Error: 404"} />
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
            src={"/assets/ErrorIphone.png"}
          />
        </div>
        <h2 className={styles.title}>
          <span style={{ color: "var(--blue)" }}>404</span> Page Not Found.
        </h2>
      </div>
    </>
  );
}

export default Page404;
