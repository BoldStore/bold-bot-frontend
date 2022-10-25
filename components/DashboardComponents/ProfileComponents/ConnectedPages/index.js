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
            src={userState?.user?.pages[0]?.facebook_profile_pic}
            className={styles.displayPic}
            alt="display"
          />
          <h6>@{userState?.user?.pages[0]?.page_name}</h6>
        </div>
        <h6>Page ID : {userState?.user?.pages[0]?.page_id}</h6>
      </div>
      <h5>Instagram Ad Account Connected To The Page</h5>
      <div className={styles.flex}>
        <div className={styles.displayFlex}>
          <img
            src={userState?.user?.pages[0]?.insta_profile_pic}
            className={styles.displayPic}
            alt="display"
          />
          <h6>@{userState?.user?.pages[0]?.insta_username}</h6>
        </div>
        <h6>Ad Account ID : {userState?.user?.pages[0]?.insta_id}</h6>
      </div>
      {/* <p className={styles.example}>Having Trouble? Click Here.</p> */}
    </div>
  );
}

export default ConnectedPages;
