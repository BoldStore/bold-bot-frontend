import React from "react";
import styles from "./styles.module.css";
function ConnectedPages() {
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
          <h6>@avi_vashishta29</h6>
        </div>
        <h6>Page ID : 1235264572823</h6>
      </div>
      <h5>Instagram Account Connected To The Page</h5>
      <div className={styles.flex}>
        <div className={styles.displayFlex}>
          <img
            src={"https://i.ibb.co/myvq6GR/aryan.jpg"}
            className={styles.displayPic}
            alt="display"
          />
          <h6>@avi_vashishta29</h6>
        </div>
        <h6>Instagram ID : 1235264572823</h6>
      </div>
      <p className={styles.example}>Having Trouble? Click Here.</p>
    </div>
  );
}

export default ConnectedPages;
