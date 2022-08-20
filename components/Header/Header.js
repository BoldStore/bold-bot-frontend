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
        <Link href={"/#OurFeatures"} passHref={true}>
          <span className={styles.navbarLink}>Our Features</span>
        </Link>
        <Link href={"/#OurPlans"} passHref={true}>
          <span className={styles.navbarLink}>Our Plans</span>
        </Link>
        <Link href={"/#ContactUs"} passHref={true}>
          <span className={styles.navbarLink}>Contact Us</span>
        </Link>
        <Link href={"/getting-started"} passHref={true}>
          <span className={styles.navbarLink}>Prerequisites</span>
        </Link>
      </div>
      <DrawerComponent />
    </div>
  );
}

export default Header;
