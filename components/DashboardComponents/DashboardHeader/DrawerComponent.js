import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import NavLinks from "./NavLinks";
import styles from "./styles.module.css";

const useStyles = makeStyles({
  list: {
    width: 190,
    backgroundColor: "var(--dashboardTheme)",
    color: "var(--white)",
    height: "100%",
  },
  fullList: {
    width: "auto",
    color: "var(--white)",
  },
});

export default function DrawerComponent() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={styles.title}>
        <h4>BOLDbot</h4>
      </div>
      <NavLinks />
    </div>
  );

  return (
    <div className={styles.mobileNavbar}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuRoundedIcon
            onClick={toggleDrawer(anchor, true)}
            className={styles.menuIcon}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
