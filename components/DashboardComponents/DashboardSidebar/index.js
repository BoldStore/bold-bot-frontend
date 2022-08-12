/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import Link from "next/link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmojiPeopleRoundedIcon from "@mui/icons-material/EmojiPeopleRounded";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useSelector } from "react-redux";
import { auth } from "../../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

function DashboardSidebar() {
  const router = useRouter();
  const userState = useSelector((state) => state.user);
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  useEffect(() => {
    if (!(typeof window === "undefined")) {
      if (window.innerWidth < 1024) {
        setCollapsed(true);
      }
    }
  }, []);

  if (!(typeof window === "undefined")) {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1024) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    });
  }

  const logout = () => {
    signOut(auth);
    router.replace("/");
  };

  return (
    <>
      <div className={styles.mobileNavbar}>
        <MenuRoundedIcon
          className={styles.drawerIcon}
          onClick={() => handleToggleSidebar(true)}
        />
      </div>
      <div className={styles.sideBarDiv}>
        <ProSidebar
          collapsed={collapsed}
          toggled={toggled}
          breakPoint="sm"
          onToggle={handleToggleSidebar}
        >
          <SidebarHeader>
            <div
              className={styles.header}
              style={{ justifyContent: collapsed && "center" }}
            >
              {!collapsed && <p>BOLDbot</p>}
              {collapsed ? (
                <ChevronRightRoundedIcon
                  className={styles.expandIcon}
                  onClick={() => handleCollapsedChange(!collapsed)}
                />
              ) : (
                <ChevronLeftRoundedIcon
                  className={styles.expandIcon}
                  onClick={() => handleCollapsedChange(!collapsed)}
                />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="circle">
              <Link href="/dashboard/">
                <MenuItem icon={<HomeRoundedIcon />}>Home</MenuItem>
              </Link>
              <Link href="/dashboard/greetings">
                <MenuItem icon={<EmojiPeopleRoundedIcon />}>Greetings</MenuItem>
              </Link>
              <Link href="/dashboard/ice-breakers">
                <MenuItem icon={<AcUnitRoundedIcon />}>Ice Breakers</MenuItem>
              </Link>
              <Link href="/dashboard/persistent-menu">
                <MenuItem icon={<MenuRoundedIcon />}>Persistent Menu</MenuItem>
              </Link>
              <Link href="/dashboard/profile">
                <MenuItem icon={<PersonRoundedIcon />}>Profile</MenuItem>
              </Link>
              <>
                <MenuItem icon={<LogoutRoundedIcon />} onClick={logout}>
                  Logout
                </MenuItem>
              </>
            </Menu>
          </SidebarContent>
          <SidebarFooter style={{ textAlign: "center" }}>
            <div className={styles.sidebarFooter}>
              <Link href="/dashboard/profile" passHref={true}>
                <div className={styles.profileFlex}>
                  <img
                    src={
                      userState?.user?.profile_pic ??
                      "https://i.ibb.co/myvq6GR/aryan.jpg"
                    }
                    className={styles.displayPic}
                    style={{
                      marginLeft: collapsed && "auto",
                      marginRight: collapsed && "auto",
                      height: collapsed && "2.5rem",
                      width: collapsed && "2.5rem",
                    }}
                    alt="display"
                  />
                  {!collapsed && (
                    <h6 className={styles.username}>
                      {userState?.user?.name ?? "Aryan Teng"}
                    </h6>
                  )}
                </div>
              </Link>
            </div>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
}

export default DashboardSidebar;
