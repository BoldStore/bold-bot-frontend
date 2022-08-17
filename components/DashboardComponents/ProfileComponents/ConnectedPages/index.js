/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";

function ConnectedPages() {
  const userState = useSelector((state) => state.user);

  return (
    <div className={styles.container}>
      <h5 style={{ marginTop: 0 }}>Facebook Page You Have Connected</h5>
      <div className={styles.flex}>
        <div className={styles.displayFlex}>
          <img
            src={"https://i.ibb.co/myvq6GR/aryan.jpg"}
            className={styles.displayPic}
            alt="display"
          />
          <h6>@{userState?.user?.pages[0]?.page_name}</h6>
        </div>
        <h6>Page ID : {userState?.user?.pages[0]?.page_id}</h6>
      </div>
      <h5>Instagram Account Connected To The Page</h5>
      <div className={styles.flex}>
        <div className={styles.displayFlex}>
          <img
            src={"https://i.ibb.co/myvq6GR/aryan.jpg"}
            className={styles.displayPic}
            alt="display"
          />
          <h6>@{userState?.user?.pages[0]?.insta_username}</h6>
        </div>
        <h6>Instagram ID : {userState?.user?.pages[0]?.insta_id}</h6>
      </div>
      <p className={styles.example}>Having Trouble? Click Here.</p>
    </div>
  );
}

export default ConnectedPages;
