import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import DrawerComponent from "./DrawerComponent";

function Header() {
  return (
    <div className={styles.navbar}>
      <Link href={"/"} passHref={true}>
        <span className={styles.title}>BOLDbot</span>
      </Link>
      <div className={styles.linksContainer}>
        <Link href={"/#OurClients"} passHref={true}>
          <span className={styles.navbarLink}>Our Clients</span>
        </Link>
        <Link href={"/#CustomGreetings"} passHref={true}>
          <span className={styles.navbarLink}>Custom Greetings</span>
        </Link>
        <Link href={"/#IceBreakers"} passHref={true}>
          <span className={styles.navbarLink}>Ice Breakers</span>
        </Link>
        <Link href={"/#PersistentMenu"} passHref={true}>
          <span className={styles.navbarLink}>Persistent Menu</span>
        </Link>
        <Link href={"/#QuickReplies"} passHref={true}>
          <span className={styles.navbarLink}>Quick Replies</span>
        </Link>
      </div>

      <DrawerComponent />
    </div>
  );
}

export default Header;
