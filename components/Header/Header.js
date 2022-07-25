import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import DrawerComponent from "./DrawerComponent";
import { motion } from "framer-motion";

function Header() {
  const [drawer, setDrawer] = useState(false);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth < 800) {
        setDrawer(true);
      }
    }
  }, []);

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <h1 style={{ marginLeft: "1rem", cursor: "pointer" }}>BOLDbot</h1>
      </Link>
      <div className={styles.links}>
        <div className={styles.buttonElement}></div>
        <Link href="/" passHref={true}>
          <p className={styles.link}>Home</p>
        </Link>
        <Link href="/" passHref={true}>
          <p className={styles.link}>Tutorial</p>
        </Link>
        <Link href="/local" passHref={true}>
          <p className={styles.link}>Local</p>
        </Link>

        <Link href="/end-free" passHref={true}>
          <p className={styles.link}>End Free</p>
        </Link>

        <Link href="/dna-to-protein" passHref={true}>
          <p className={styles.link}>DNA to Protein</p>
        </Link>
        <Link href="/orfs" passHref={true}>
          <p className={styles.link}>ORFs</p>
        </Link>
      </div>

      <DrawerComponent />
    </div>
  );
}

export default Header;
