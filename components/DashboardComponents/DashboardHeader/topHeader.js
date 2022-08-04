/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";

function TopHeader() {
  const userState = useSelector((state) => state.user);

  return (
    <div className={styles.navbar}>
      <Link href={"/dashboard"} passHref={true}>
        <h4 className={styles.logo}>BOLDBOT</h4>
      </Link>

      <div className={styles.linksContainer}>
        <img
          src={
            userState?.user?.profile_pic ?? "https://i.ibb.co/myvq6GR/aryan.jpg"
          }
          className={styles.user}
          alt="User Pic"
        />
        <p>{userState?.user?.name ?? "Name"}</p>
      </div>
    </div>
  );
}

export default TopHeader;
