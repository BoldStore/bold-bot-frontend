import React from "react";
import DashboardHeader from "../../components/DashboardComponents/DashboardHeader";
import TopHeader from "../../components/DashboardComponents/DashboardHeader/topHeader";
import InputComponent from "../../components/DashboardComponents/InputComponent";
import { iceBreakers } from "../../components/DashboardComponents/Lists/iceBreakers";
import styles from "../../styles/common.module.css";
import DashboardButton from "../../components/DashboardComponents/DashboardButton";
function IceBreakerPage() {
  return (
    <>
      <TopHeader />
      <DashboardHeader />
      <div className={styles.container}>
        <h2 className={styles.title}>Ice Breakers</h2>
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
    </>
  );
}

export default IceBreakerPage;
