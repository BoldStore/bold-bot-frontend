import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "@material-ui/core";
import React from "react";
import styles from "./styles.module.css";

function NavLinks() {
  return (
    <div>
      <Link href={"/#OurClients"} passHref={true}>
        <p className={styles.mobileLink}>Our Clients</p>
      </Link>
      <Link href={"/#CustomGreetings"} passHref={true}>
        <p className={styles.mobileLink}>Custom Greetings</p>
      </Link>
      <Link href={"/#IceBreakers"} passHref={true}>
        <p className={styles.mobileLink}>Ice Breakers</p>
      </Link>
      <Link href={"/#PersistentMenu"} passHref={true}>
        <p className={styles.mobileLink}>Persistent Menu</p>
      </Link>
      <Link href={"/#QuickReplies"} passHref={true}>
        <p className={styles.mobileLink}>Quick Replies</p>
      </Link>
    </div>
  );
}

export default NavLinks;
