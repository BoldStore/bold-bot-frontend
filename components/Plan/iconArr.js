import EmojiPeopleRoundedIcon from "@mui/icons-material/EmojiPeopleRounded";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import InsertLinkRoundedIcon from "@mui/icons-material/InsertLinkRounded";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import styles from "./styles.module.css";

export const iconArr = {
  greeting: <EmojiPeopleRoundedIcon className={styles.icon} />,
  persistent_menu: <MenuRoundedIcon className={styles.icon} />,
  ice_breakers: <AcUnitRoundedIcon className={styles.icon} />,
  website_link: <InsertLinkRoundedIcon className={styles.icon} />,
  custom_replies: <ReplyRoundedIcon className={styles.icon} />,
};
