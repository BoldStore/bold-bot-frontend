import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import DrawerComponent from "./DrawerComponent";

function DashboardHeader() {
  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles.title}>
          <h6>BOLDbot</h6>
        </div> */}
        <br />
        <Link href="/dashboard/">
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
        <Link href="/dashboard/profile">
          <p className={styles.link}>Profile</p>
        </Link>
      </div>
      <DrawerComponent />
    </>
  );
}

export default DashboardHeader;
