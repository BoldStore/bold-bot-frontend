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
import {
  addStoryMention,
  getStoryMentions,
} from "../../store/actions/story-mention";
import {
  addStoryReplies,
  getStoryReplies,
} from "../../store/actions/story-reply";

function StoryRepliesPage() {
  const hasPlan = true;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const replies = useSelector((state) => state.reply);
  const mentions = useSelector((state) => state.mention);
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
      dispatch(getStoryMentions(user?.user?.pages[0].id));
      dispatch(getStoryReplies(user?.user?.pages[0].id));
    }
  }, [user.user]);

  const save = () => {
    if (user && user.user && user?.user?.pages?.length > 0) {
      // Story mention
      const texts = [];
      texts.push({
        key: "1",
        value: form[1].value,
      });
      dispatch(addStoryMention(user?.user?.pages[0].id, texts));

      // Story reply
      const replies = [];
      replies.push({
        question: form[0].heading,
        texts: [
          {
            key: "1",
            value: form[0].reply,
          },
        ],
      });
      dispatch(addStoryReplies(user?.user?.pages[0].id, replies));
    }
  };

  useEffect(() => {
    if (
      mentions?.message &&
      mentions?.message?.length > 0 &&
      mentions?.message[0]?.texts?.length > 0
    ) {
      const arr = form;
      const i = arr.findIndex((e) => e.key == "story-mention");
      arr[i] = {
        key: "story-mention",
        value: mentions.message[0].texts[0].value,
      };
      setForm(arr);
    }

    if (
      replies?.message &&
      replies?.message?.length > 0 &&
      replies?.message[0].texts?.length > 0
    ) {
      const arr = form;
      const i = arr.findIndex((e) => e.key == "story-reply");
      arr[i] = {
        key: "story-reply",
        heading: replies.message[0].question,
        reply: replies.message[0].texts[0].value,
      };
      setForm(arr);
    }
  }, [mentions.message, replies.message]);

  if (replies?.isLoading || mentions?.isLoading) {
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
        <DashboardButton text={"Save"} onClick={save} />
      </div>
    </div>
  );
}

export default StoryRepliesPage;
