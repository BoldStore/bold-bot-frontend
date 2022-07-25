import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "@material-ui/core";
import React from "react";
import styles from "./styles.module.css";

function NavLinks() {
  return (
    <List>
      <Link href="/" className={styles.link}>
        <ListItem className={styles.mobileLink}>Home</ListItem>
      </Link>
      <Link href="/global" className={styles.link}>
        <ListItem className={styles.mobileLink}>Global</ListItem>
      </Link>
      <Link href="/local" className={styles.link}>
        <ListItem className={styles.mobileLink}>Local</ListItem>
      </Link>
      <Link href="/end-free" className={styles.link}>
        <ListItem className={styles.mobileLink}>End-Free</ListItem>
      </Link>
      <Link href="/dna-to-protein" className={styles.link}>
        <ListItem className={styles.mobileLink}>DNA to Protein</ListItem>
      </Link>
      <Link href="/orfs" className={styles.link}>
        <ListItem className={styles.mobileLink}>ORFs</ListItem>
      </Link>
      <Link href="/about-us" className={styles.link}>
        <ListItem className={styles.mobileLink}>About Us</ListItem>
      </Link>
    </List>
  );
}

export default NavLinks;
