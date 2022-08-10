import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

function NavLinks() {
  return (
    <div>
      {/* <Link href={"/#OurClients"} passHref={true}>
        <p className={styles.mobileLink}>Our Clients</p>
      </Link> */}
      <Link href={"/#OurPlans"} passHref={true}>
        <p className={styles.mobileLink}>Our Plans</p>
      </Link>
      <Link href={"/#Greetings"} passHref={true}>
        <p className={styles.mobileLink}>Greetings</p>
      </Link>
      <Link href={"/#IceBreakers"} passHref={true}>
        <p className={styles.mobileLink}>Ice Breakers</p>
      </Link>
      <Link href={"/#PersistentMenu"} passHref={true}>
        <p className={styles.mobileLink}>Persistent Menu</p>
      </Link>
      <Link href={"/#QuickReplies"} passHref={true}>
        <p className={styles.mobileLink}>Custom Replies</p>
      </Link>
    </div>
  );
}

export default NavLinks;
