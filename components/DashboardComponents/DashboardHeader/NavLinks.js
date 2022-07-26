import { style } from "@mui/system";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

function NavLinks() {
  return (
    <div className={styles.links}>
      <Link href="/dashboard/quick-replies">
        <p className={styles.link}>Home</p>
      </Link>
      <Link href="/dashboard/greetings">
        <p className={styles.link}>Greetings</p>
      </Link>
      <Link href="/dashboard/persistent-menu">
        <p className={styles.link}>Persistent Menu</p>
      </Link>
      <Link href="/dashboard/quick-replies">
        <p className={styles.link}>Quick Replies</p>
      </Link>
      <Link href="/dashboard/ice-breakers">
        <p className={styles.link}>Ice Breakers</p>
      </Link>
    </div>
  );
}

export default NavLinks;
