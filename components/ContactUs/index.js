import React, { useState } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import InputComponent from "../DashboardComponents/InputComponent";
import DashboardButton from "../DashboardComponents/DashboardButton";
import { contactUs } from "./contactUs";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { contactBold } from "../../store/actions/contact";
import { useRouter } from "next/router";

function ContactUs() {
  const dispatch = useDispatch();
  const router = useRouter();

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

  const validate = () => {
    if (
      form.find((item) => item.key == "email").value === "" &&
      form.find((item) => item.key == "username").value === ""
    ) {
      toast.error("Please fill in your details!");
      return false;
    }
    if (form.find((item) => item.key == "email").value === "") {
      toast.error("Please fill in your email!");
      return false;
    }
    if (form.find((item) => item.key == "username").value === "") {
      toast.error("Please fill in your username!");
      return false;
    }
    if (!form.find((item) => item.key == "email").value.includes("@")) {
      toast.error("Please fill a valid email address!");
      return false;
    }
    return true;
  };

  const submit = () => {
    if (validate()) {
      dispatch(
        contactBold(
          form.find((e) => (e.key = "email")).value,
          form.find((e) => (e.key = "username")).value
        )
      );
      toast.success("Form Submitted Successfully!", {
        autoClose: 3000,
      });
      router.push("/");
    }
    return;
  };

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
          Want your own BOLD<span style={{ color: "var(--blue)" }}>bot</span>?{" "}
          Fill in your details below or DM us{" "}
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
