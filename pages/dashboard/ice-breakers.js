import React from "react";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import InputComponent from "../../components/DashboardComponents/InputComponent";
import { iceBreakers } from "../../components/DashboardComponents/Lists/iceBreakers";
import styles from "../../styles/common.module.css";
import DashboardButton from "../../components/DashboardComponents/DashboardButton";
function IceBreakerPage() {
  return (
    <div className={styles.pageDiv}>
      <DashboardSidebar />
      <div className={styles.container}>
        <h3 className={styles.title}>Ice Breakers</h3>
        <p className={styles.introPara}>
          Ice Breakers provide a way for users to start a conversation with a
          business with a list of frequently asked questions. A maximum of 4
          questions can be set via the Ice Breaker API.
        </p>
        {iceBreakers.map((item, i) => (
          <InputComponent
            key={i}
            title={item.title}
            desc={item.desc}
            placeholder={item.placeholder}
          />
        ))}
        <DashboardButton text={"Save"} />
      </div>
    </div>
  );
}

export default IceBreakerPage;
