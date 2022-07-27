import React from "react";
import styles from "./styles.module.css";

function ProfileCard({ displayPic, name, membership }) {
  return (
    <div className={styles.container}>
      <div className={styles.userInfoContainer}>
        <img
          src={"https://i.ibb.co/myvq6GR/aryan.jpg"}
          className={styles.displayPic}
          alt="display"
        />
        <h3>Aryan Teng</h3>
      </div>
      <div className={styles.membershipBox}>
        <p className={styles.membershipBanner}>Premium Member</p>
        <p className={styles.expiry}>Membership expires on 29/07/2022</p>
      </div>
    </div>
  );
}

export default ProfileCard;
