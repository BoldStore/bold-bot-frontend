import React, { useState } from "react";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import DashboardButton from "../../components/DashboardComponents/DashboardButton";
import { persistentMenu } from "../../components/DashboardComponents/Lists/persistent-menu";
import styles from "../../styles/common.module.css";
import { features } from "../../components/Feature/features";
import SecondaryInputComponent from "../../components/DashboardComponents/InputComponent/secondaryInput";

function PersistentMenu() {
  const [showExample, setShowExample] = useState(false);
  return (
    <div className={styles.pageDiv}>
      <DashboardSidebar />
      <div className={styles.container}>
        <h3 className={styles.title}>Persistent Menu</h3>
        <p className={styles.introPara}>{features[2]["desc"]}</p>
        <p
          className={styles.example}
          onClick={() => setShowExample(!showExample)}
        >
          Click here to view an example
        </p>
        {showExample && (
          <div>
            <img
              src="/assets/persistentMenu.png"
              alt="example"
              className={styles.img}
            />
          </div>
        )}
        {persistentMenu.map((item, i) => (
          <SecondaryInputComponent
            key={i}
            title={item.title}
            placeholderHeading={item.placeholderHeading}
            placeholderReply={item.placeholderReply}
          />
        ))}
        <DashboardButton text={"Save"} />
      </div>
    </div>
  );
}

export default PersistentMenu;
