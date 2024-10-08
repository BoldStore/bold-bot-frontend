/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import InputComponent from "../../components/DashboardComponents/InputComponent";
import { greetings } from "../../components/Lists/greetings";
import styles from "../../styles/common.module.css";
import DashboardButton from "../../components/DashboardComponents/DashboardButton";
import { useDispatch, useSelector } from "react-redux";
import { addGreeting, getGreeting } from "../../store/actions/greeting";
import SEO from "../../components/SEO";
import Loader from "../../components/Loader";

function GreetingsPage() {
  const hasPlan = true;
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
  ]);

  useEffect(() => {
    if (user && user.user && user?.user?.pages?.length > 0) {
      disptach(getGreeting(user?.user?.pages[0].id));
    }
  }, [user.user]);

  useEffect(() => {
    if (user && user.user && user?.user?.pages?.length > 0) {
      disptach(getGreeting(user?.user?.pages[0].id));
    }
  }, []);

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

  if (greeting.isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.pageDiv}>
      <SEO
        title={"Greetings"}
        desc={
          "Automated never means generic here at Bold. These are the first responses to a buyer’s dm. Each store can customize its greetings to cater to the needs and wants of its clientele as well as target markets. Design your own custom greetings which define you as a store when interacting with patrons."
        }
      />
      <DashboardSidebar />
      <div className={styles.container}>
        <h3 className={styles.title}>Greetings</h3>
        <p className={styles.introPara}>
          Custom greetings are the first responses to a buyer&apos;s DM, design
          your own automated replies which define you as a brand.
        </p>
        <div>
          <img
            src="/assets/greetingExample.png"
            alt="example"
            className={styles.img}
          />
        </div>
        {greetings.map((item, i) => (
          <InputComponent
            key={i}
            title={item.title}
            desc={item.desc}
            value={form.find((e) => e.key == item.key).value}
            placeholder={item.placeholder}
            itemKey={item.key}
            disable={!hasPlan}
            form={form}
            setForm={setForm}
          />
        ))}
        <DashboardButton text={"Save"} onClick={saveGreeting} />
      </div>
    </div>
  );
}

export default GreetingsPage;
