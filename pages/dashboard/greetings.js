/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import InputComponent from "../../components/DashboardComponents/InputComponent";
import { greetings } from "../../components/DashboardComponents/Lists/greetings";
import styles from "../../styles/common.module.css";
import DashboardButton from "../../components/DashboardComponents/DashboardButton";
import { useDispatch, useSelector } from "react-redux";
import { addGreeting, getGreeting } from "../../store/actions/greeting";

function GreetingsPage() {
  const disptach = useDispatch();
  const user = useSelector((state) => state.user);
  const greeting = useSelector((state) => state.greeting);
  const [form, setForm] = useState([
    {
      key: "introduction",
      value: "",
    },
    {
      key: "welcome",
      value: "",
    },
    {
      key: "fallback",
      value: "",
    },
  ]);

  const setValue = (e, itemKey) => {
    const arr = form;
    arr.find((e) => e.key == itemKey).value = e.target.value;
    setForm(arr);
  };

  useEffect(() => {
    if (user && user.user && user?.user?.pages?.length > 0) {
      disptach(getGreeting(user?.user?.pages[0].id));
    }
  }, [user.user]);

  const saveGreeting = () => {
    if (user && user.user && user?.user?.pages?.length > 0) {
      disptach(addGreeting(user?.user?.pages[0].id, form));
    }
  };

  useEffect(() => {
    if (greeting?.message && greeting?.message?.texts?.length > 0) {
      const arr = form;
      for (let i = 0; i < greeting?.message?.texts.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (arr[j].key === greeting?.message?.texts[i].key) {
            arr[j].value = greeting?.message?.texts[i].value;
          }
        }
      }
      setForm(arr);
    }
  }, [greeting.message]);

  useEffect(() => {
    console.log(form);
  }, [form]);

  if (greeting.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.pageDiv}>
      <DashboardSidebar />
      <div className={styles.container}>
        <h3 className={styles.title}>Greetings</h3>
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
            value={form.find((e) => e.key == item.key).value}
            placeholder={item.placeholder}
            itemKey={item.key}
            setValue={setValue}
          />
        ))}
        <DashboardButton text={"Save"} onClick={saveGreeting} />
      </div>
    </div>
  );
}

export default GreetingsPage;
