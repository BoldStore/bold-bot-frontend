import React from "react";
import DashboardHeader from "../../components/DashboardComponents/DashboardHeader";
import TopHeader from "../../components/DashboardComponents/DashboardHeader/topHeader";
import InputComponent from "../../components/DashboardComponents/InputComponent";
import { greetings } from "../../components/DashboardComponents/Lists/greetings";
import styles from "../../styles/common.module.css";
import DashboardButton from "../../components/DashboardComponents/DashboardButton";
function GreetingsPage() {
  return (
    <>
      <TopHeader />
      <DashboardHeader />
      <div className={styles.container}>
        <h2 className={styles.title}>Greetings</h2>
        <p className={styles.introPara}>
          Ice Breakers provide a way for users to start a conversation with a
          business with a list of frequently asked questions. A maximum of 4
          questions can be set via the Ice Breaker API.
        </p>
        {greetings.map((item, i) => (
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

export default GreetingsPage;
