/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";

function ProfileCard() {
  const userState = useSelector((state) => state.user);

  return (
    <div className={styles.container}>
      <div className={styles.userInfoContainer}>
        <img
          src={
            userState?.user?.profile_pic ?? "https://i.ibb.co/myvq6GR/aryan.jpg"
          }
          className={styles.displayPic}
          alt="display"
        />
        <h3>{userState?.user?.name ?? "Username"}</h3>
      </div>
      <div className={styles.membershipBox}>
        <p className={styles.membershipBanner}>Standard Member</p>
        {/* <p className={styles.expiry}>Membership expires on 29/07/2022</p> */}
      </div>
    </div>
  );
}

export default ProfileCard;
