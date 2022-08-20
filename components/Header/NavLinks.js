import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

function NavLinks() {
  return (
    <div>
      {/* <Link href={"/#OurClients"} passHref={true}>
        <p className={styles.mobileLink}>Our Clients</p>
      </Link> */}
      <Link href={"/#OurFeatures"} passHref={true}>
        <p className={styles.mobileLink}>Our Features</p>
      </Link>
      <Link href={"/#OurPlans"} passHref={true}>
        <p className={styles.mobileLink}>Our Plans</p>
      </Link>
      <Link href={"/#ContactUs"} passHref={true}>
        <p className={styles.mobileLink}>Contact Us</p>
      </Link>
      <Link href={"/getting-started"} passHref={true}>
        <p className={styles.mobileLink}>Prerequisites</p>
      </Link>
    </div>
  );
}

export default NavLinks;
