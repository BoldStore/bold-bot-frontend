import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaUser,
  FaHeart,
} from "react-icons/fa";
// import "react-pro-sidebar/dist/css/styles.css";
import Link from "next/link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmojiPeopleRoundedIcon from "@mui/icons-material/EmojiPeopleRounded";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function DashboardSidebar() {
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
              {!collapsed && <p>BOLDBOT</p>}
              {collapsed ? (
                <ChevronRightIcon
                  className={styles.expandIcon}
                  onClick={() => handleCollapsedChange(!collapsed)}
                />
              ) : (
                <ChevronLeftIcon
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
                <MenuItem icon={<EmojiPeopleRoundedIcon />}>
                  {" "}
                  Greetings
                </MenuItem>
              </Link>
              <Link href="/dashboard/persistent-menu">
                <MenuItem icon={<MenuRoundedIcon />}>Persistent Menu</MenuItem>
              </Link>
              <Link href="/dashboard/ice-breakers">
                <MenuItem icon={<AcUnitRoundedIcon />}>Ice Breakers</MenuItem>
              </Link>
              <Link href="/dashboard/profile">
                <MenuItem icon={<FaUser />}>Profile</MenuItem>
              </Link>
            </Menu>
            {/* <Menu iconShape="circle">
              <SubMenu
                suffix={<span className="badge yellow">3</span>}
                title={"hi"}
                icon={<FaRegLaughWink />}
              >
                <MenuItem>{"hi"} 1</MenuItem>
                <MenuItem>{"hi"} 2</MenuItem>
                <MenuItem>{"hi"} 3</MenuItem>
              </SubMenu>
              <SubMenu
                prefix={<span className="badge gray">3</span>}
                title={"hi"}
                icon={<FaHeart />}
              >
                <MenuItem>{"hi"} 1</MenuItem>
                <MenuItem>{"hi"} 2</MenuItem>
                <MenuItem>{"hi"} 3</MenuItem>
              </SubMenu>
              <SubMenu title={"hi"} icon={<FaList />}>
                <MenuItem>{"hi"} 1 </MenuItem>
                <MenuItem>{"hi"} 2 </MenuItem>
                <SubMenu title={`${"hi"} 3`}>
                  <MenuItem>{"hi"} 3.1 </MenuItem>
                  <MenuItem>{"hi"} 3.2 </MenuItem>
                  <SubMenu title={`${"hi"} 3.3`}>
                    <MenuItem>{"hi"} 3.3.1 </MenuItem>
                    <MenuItem>{"hi"} 3.3.2 </MenuItem>
                    <MenuItem>{"hi"} 3.3.3 </MenuItem>
                  </SubMenu>
                </SubMenu>
              </SubMenu>
            </Menu> */}
          </SidebarContent>

          {/* <SidebarFooter style={{ textAlign: "center" }}>
            <div
              className="sidebar-btn-wrapper"
              style={{
                padding: "20px 24px",
              }}
            >
              <a
                href="https://github.com/azouaoui-med/react-pro-sidebar"
                target="_blank"
                className="sidebar-btn"
                rel="noopener noreferrer"
              >
                <FaGithub />
                <span
                  style={{
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {"hi"}
                </span>
              </a>
            </div>
          </SidebarFooter> */}
        </ProSidebar>
      </div>
    </>
  );
}

export default DashboardSidebar;
