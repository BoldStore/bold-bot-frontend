import React from "react";
import styles from "./client.module.css";

function Client({ imgSrc, username, link, followers }) {
  return (
    <div className={styles.container}>
      <img
        src={"https://i.ibb.co/bRmp6KC/BOLDbot.png"}
        className={styles.displayPic}
        alt="display"
      />
      <div className={styles.clientInfo}>
        <a
          href={"https://www.instagram.com/aryanteng/"}
          target="_blank"
          rel="noreferrer"
        >
          <p style={{ cursor: "pointer" }}>@aryanteng{username}</p>
        </a>
        <p>Followers: 100M{followers}</p>
      </div>
    </div>
  );
}

export default Client;
