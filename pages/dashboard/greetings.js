/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import InputComponent from "../../components/DashboardComponents/InputComponent";
import { greetings } from "../../components/DashboardComponents/Lists/greetings";
import styles from "../../styles/common.module.css";
import DashboardButton from "../../components/DashboardComponents/DashboardButton";
import { useDispatch, useSelector } from "react-redux";
import { addGreeting, getGreeting } from "../../store/actions/greeting";
import { features } from "../../components/Feature/features";

function GreetingsPage() {
  const disptach = useDispatch();
  const user = useSelector((state) => state.user);
  const [showExample, setShowExample] = useState(false);
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

  const setValue = (e, itemKey) => {
    const inputIndex = form.findIndex((i) => {
      return i.key === itemKey;
    });

    const input = {
      ...form[inputIndex],
    };

    input.value = e.target.value;

    const inputs = [...form];
    inputs[inputIndex] = input;

    setForm(inputs);
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
          Custom greetings are the first responses to a buyer&apos;s dm, design
          your own automated replies which define you as a brand.
        </p>
        <p
          className={styles.example}
          onClick={() => setShowExample(!showExample)}
        >
          Click here to view an example
        </p>
        {showExample && (
          <div>
            <img
              src="/assets/greeting.png"
              alt="example"
              className={styles.img}
            />
          </div>
        )}
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
