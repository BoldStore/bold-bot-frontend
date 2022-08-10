import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import DrawerComponent from "./DrawerComponent";

function Header() {
  return (
    <div className={styles.navbar}>
      <Link href={"/"} passHref={true}>
        <span className={styles.title}>
          BOLD<span className={styles.subTitle}>bot</span>
        </span>
      </Link>
      <div className={styles.linksContainer}>
        {/* <Link href={"/#OurClients"} passHref={true}>
          <span className={styles.navbarLink}>Our Clients</span>
        </Link> */}
        <Link href={"/#OurPlans"} passHref={true}>
          <span className={styles.navbarLink}>Our Plans</span>
        </Link>
        <Link href={"/#Greetings"} passHref={true}>
          <span className={styles.navbarLink}>Greetings</span>
        </Link>
        <Link href={"/#IceBreakers"} passHref={true}>
          <span className={styles.navbarLink}>Ice Breakers</span>
        </Link>
        <Link href={"/#PersistentMenu"} passHref={true}>
          <span className={styles.navbarLink}>Persistent Menu</span>
        </Link>
        <Link href={"/#CustomReplies"} passHref={true}>
          <span className={styles.navbarLink}>Custom Replies</span>
        </Link>
      </div>
      <DrawerComponent />
    </div>
  );
}

export default Header;
