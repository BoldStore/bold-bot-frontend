import React from "react";
import styles from "./client.module.css";

function Client({ imgSrc, username, link, followers }) {
  return (
    <a
      href={"https://www.instagram.com/aryanteng/"}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.container}>
        <img
          src={"https://i.ibb.co/myvq6GR/aryan.jpg"}
          className={styles.displayPic}
          alt="display"
        />
        <div className={styles.clientInfo}>
          <p style={{ cursor: "pointer" }}>@aryanteng{username}</p>
          <p>Followers: 100M{followers}</p>
        </div>
      </div>
    </a>
  );
}

export default Client;
