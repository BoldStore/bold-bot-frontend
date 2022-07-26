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
        <h3>Aryan</h3>
        <div className={styles.membershipBanner}>
          <p>Premium Member</p>
        </div>
      </div>
      <p>Membership expires on 29/07/2022</p>
    </div>
  );
}

export default ProfileCard;
