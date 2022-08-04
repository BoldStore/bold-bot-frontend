/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import DashboardHeader from "../../components/DashboardComponents/DashboardHeader";
import TopHeader from "../../components/DashboardComponents/DashboardHeader/topHeader";
import InputComponent from "../../components/DashboardComponents/InputComponent";
import { greetings } from "../../components/DashboardComponents/Lists/greetings";
import styles from "../../styles/common.module.css";
import DashboardButton from "../../components/DashboardComponents/DashboardButton";
import { useDispatch, useSelector } from "react-redux";
import { getGreeting } from "../../store/actions/greeting";

function GreetingsPage() {
  const disptach = useDispatch();
  const user = useSelector((state) => state.user);
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    if (user && user.user && user?.user?.pages?.length > 0) {
      disptach(getGreeting(user?.user?.pages[0].id));
    }
  }, [user.user]);

  if (greeting.isLoading) {
    return <div>Loading...</div>;
  }

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
