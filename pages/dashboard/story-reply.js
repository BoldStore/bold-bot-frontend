/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import InputComponent from "../../components/DashboardComponents/InputComponent";
import { story } from "../../components/Lists/story";
import styles from "../../styles/common.module.css";
import DashboardButton from "../../components/DashboardComponents/DashboardButton";
import { useDispatch, useSelector } from "react-redux";
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
import Loader from "../../components/Loader";
import { toast } from "react-toastify";

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
  ]);

  useEffect(() => {
    if (user && user.user && user?.user?.pages?.length > 0) {
      dispatch(getStoryReplies(user?.user?.pages[0].id));
    }
  }, [user.user]);

  const save = () => {
    if (user && user.user && user?.user?.pages?.length > 0) {
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

      if (form[0].reply != "" && form[0].heading != "") {
        dispatch(addStoryReplies(user?.user?.pages[0].id, replies));
        toast.success("Your Story Reply is live on Instagram!", {
          autoClose: 3000,
        });
      }
    }
  };

  useEffect(() => {
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
  }, [replies.message]);

  if (replies?.isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.pageDiv}>
      <SEO
        title={"Story Replies & Story Mentions"}
        desc="Set customised automated replies whenever someone replies to your story with the keyword of your choice! This will help you take product advertisements and brand/event promotions to a new level! Convert your DMs into the automated assistant of your dreams with our custom templates to help sell your merchandise. Use our templates to link your products with ease."
      />
      <DashboardSidebar />
      <div className={styles.container}>
        <h3 className={styles.title}>Story Replies</h3>
        <p className={styles.introPara}>
          Set customisable automated replies whenever someone replies to your
          story! You can choose a specific keyword that you want to set the
          automated replies for. Handling story campaigns and marketing has
          never been easier.
        </p>
        <div>
          {/* <img
            src="/assets/greetingExample.png"
            alt="example"
            className={styles.img}
          /> */}
        </div>

        {story.map((item, i) => {
          if (item.placeholderReply && item.placeholderHeading) {
            return (
              <SecondaryInputComponent
                key={i}
                title={item.title}
                placeholderHeading={item.placeholderHeading}
                placeholderReply={item.placeholderReply}
                valueHeading={form.find((e) => e.key == item.key)?.heading}
                valueReply={form.find((e) => e.key == item.key)?.reply}
                itemKey={item.key}
                disable={!hasPlan}
                form={form}
                setForm={setForm}
              />
            );
          }
        })}
        <DashboardButton text={"Save"} onClick={save} />
      </div>
    </div>
  );
}

export default StoryRepliesPage;
