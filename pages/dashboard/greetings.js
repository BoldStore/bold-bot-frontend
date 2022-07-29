import React from "react";
import DashboardHeader from "../../components/DashboardComponents/DashboardHeader";
import TopHeader from "../../components/DashboardComponents/DashboardHeader/topHeader";
import InputComponent from "../../components/DashboardComponents/InputComponent";
import styles from "../../styles/common.module.css";

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
        <InputComponent
          title="Introductory Text"
          desc={
            "This is an introductory message that will be sent to your patron when they are opening your direct messages."
          }
          placeholder={
            "Hi {{customer}}! It's amazing to see you, what can we help you with?"
          }
        />
        <InputComponent
          title="Fallback Text"
          placeholder={"Didn't quite get that, could you repeat?"}
          desc={
            "This is an introductory message that will be sent to your patron when they are opening your direct messages."
          }
        />
      </div>
    </>
  );
}

export default GreetingsPage;
