import React from "react";
import styles from "./styles.module.css";
import Client from "./Client";
import InstagramIcon from "@mui/icons-material/Instagram";

function ClientsWithUs({ clients }) {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <InstagramIcon className={styles.icon} />
        <h2>Clients With Us</h2>
      </div>
      <div className={styles.clientsContainer}>
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
      </div>
    </div>
  );
}

export default ClientsWithUs;
