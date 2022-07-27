import React from "react";
import DashboardHeader from "../../components/DashboardComponents/DashboardHeader";
import InputComponent from "../../components/DashboardComponents/InputComponent";
import styles from "../../styles/common.module.css";
function GreetingsPage() {
  return (
    <div>
      <DashboardHeader />
      <div className={styles.container}>
        <h1 className={styles.title}>Greetings</h1>
        <p className={styles.introPara}>
          Ice Breakers provide a way for users to start a conversation with a
          business with a list of frequently asked questions. A maximum of 4
          questions can be set via the Ice Breaker API.
        </p>
        <InputComponent
          title="Intro text"
          placeholder={
            "Hi {{customer}} ! It's Amazing to see you, what can we help you with ??"
          }
        />
        <InputComponent
          title="Fallback Text"
          placeholder={"Didn't quite get that, could you repeat?"}
        />
      </div>
    </div>
  );
}

export default GreetingsPage;
