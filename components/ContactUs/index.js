import React, { useState } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import InputComponent from "../DashboardComponents/InputComponent";
import DashboardButton from "../DashboardComponents/DashboardButton";
import { contactUs } from "./contactUs";

function ContactUs() {
  const submit = () => {
    console.log(form, "bkl");
  };
  const [form, setForm] = useState([
    {
      key: "email",
      value: "",
    },
    {
      key: "username",
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
  return (
    <div className={styles.container} id="ContactUs">
      <div className={styles.backgroundGradient} />
      <div className={styles.backgroundGradientMobile} />
      <div className={styles.contactUs}>
        <h2>Contact Us</h2>
        <h6>
          Want your own BOLDbot? Fill in your details below or DM us{" "}
          <a
            href="https://www.instagram.com/boldbot.in/"
            target={"_blank"}
            className={styles.link}
            rel="noreferrer"
          >
            @boldbot.in
          </a>{" "}
          !
        </h6>
        {contactUs.map((item, i) => {
          return (
            <InputComponent
              key={i}
              title={item.title}
              placeholder={item.placeholder}
              desc={item.desc}
              value={form.find((e) => e.key == item.key).value}
              itemKey={item.key}
              setValue={setValue}
            />
          );
        })}
        <DashboardButton text={"Submit"} onClick={submit} />
      </div>
      <motion.img
        src={"/assets/boldbotFeed.png"}
        className={styles.img}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          type: "spring",
          repeat: Infinity,
        }}
      />
    </div>
  );
}

export default ContactUs;
