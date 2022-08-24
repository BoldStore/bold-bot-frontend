/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import InputComponent from "../../components/DashboardComponents/InputComponent";
import { story } from "../../components/Lists/story";
import styles from "../../styles/common.module.css";
import DashboardButton from "../../components/DashboardComponents/DashboardButton";
import { useDispatch, useSelector } from "react-redux";
import { addGreeting, getGreeting } from "../../store/actions/greeting";
import SEO from "../../components/SEO";
import SecondaryInputComponent from "../../components/DashboardComponents/InputComponent/secondaryInput";

function StoryRepliesPage() {
  const hasPlan = true;
  const disptach = useDispatch();
  const user = useSelector((state) => state.user);
  const greeting = useSelector((state) => state.greeting);
  const [form, setForm] = useState([
    {
      key: "story-reply",
      heading: "",
      reply: "",
    },
    {
      key: "story-mention",
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

  const setValueHeading = (e, itemKey) => {
    const inputIndex = form.findIndex((i) => {
      return i.key === itemKey;
    });

    const input = {
      ...form[inputIndex],
    };

    input.heading = e.target.value;

    const inputs = [...form];
    inputs[inputIndex] = input;

    setForm(inputs);
    console.log(form);
  };

  const setValueReply = (e, itemKey) => {
    const inputIndex = form.findIndex((i) => {
      return i.key === itemKey;
    });

    const input = {
      ...form[inputIndex],
    };

    input.reply = e.target.value;

    const inputs = [...form];
    inputs[inputIndex] = input;

    setForm(inputs);
    console.log(form);
  };

  return (
    <div className={styles.pageDiv}>
      <SEO
        title={"Story Replies and Mentions"}
        desc={
          "Automated never means generic here at Bold. These are the first responses to a buyer’s dm. Each store can customize its greetings to cater to the needs and wants of its clientele as well as target markets. Design your own custom greetings which define you as a store when interacting with patrons."
        }
      />
      <DashboardSidebar />
      <div className={styles.container}>
        <h3 className={styles.title}>Story Replies and Mentions</h3>
        <p className={styles.introPara}>
          Now you can reply to the story mentions and replies sent by customers!
        </p>
        <div>
          {/* <img
            src="/assets/greetingExample.png"
            alt="example"
            className={styles.img}
          /> */}
        </div>

        <SecondaryInputComponent
          title={story[0].title}
          placeholderHeading={story[0].placeholderHeading}
          placeholderReply={story[0].placeholderReply}
          valueHeading={form.find((e) => e.key == story[0].key)?.heading}
          valueReply={form.find((e) => e.key == story[0].key)?.reply}
          itemKey={story[0].key}
          setValueReply={setValueReply}
          setValueHeading={setValueHeading}
          disable={!hasPlan}
        />
        <InputComponent
          title={story[1].title}
          desc={story[1].desc}
          value={form.find((e) => e.key == story[1].key).value}
          placeholder={story[1].placeholder}
          itemKey={story[1].key}
          setValue={setValue}
          disable={!hasPlan}
        />
        <DashboardButton text={"Save"} onClick={saveGreeting} />
      </div>
    </div>
  );
}

export default StoryRepliesPage;
