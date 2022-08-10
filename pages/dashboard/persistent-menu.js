import React, { useState } from "react";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import DashboardButton from "../../components/DashboardComponents/DashboardButton";
import { persistentMenu } from "../../components/DashboardComponents/Lists/persistent-menu";
import styles from "../../styles/common.module.css";
import { features } from "../../components/Feature/features";
import SecondaryInputComponent from "../../components/DashboardComponents/InputComponent/secondaryInput";

function PersistentMenu() {
  const [showExample, setShowExample] = useState(false);
  const [form, setForm] = useState([
    {
      key: "menuOption1",
      heading: "",
      reply: "",
    },
    {
      key: "menuOption2",
      heading: "",
      reply: "",
    },
  ]);

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
      <DashboardSidebar />
      <div className={styles.container}>
        <h3 className={styles.title}>Persistent Menu</h3>
        <p className={styles.introPara}>
          The persistent menu in the tab section allows for customers to
          navigate the conversation better by giving them the option of not just
          starting over but also the choice to introduce other points of
          interest .
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
              src="/assets/persistentMenu.png"
              alt="example"
              className={styles.img}
            />
          </div>
        )}
        {persistentMenu.map((item, i) => (
          <SecondaryInputComponent
            key={i}
            title={item.title}
            placeholderHeading={item.placeholderHeading}
            placeholderReply={item.placeholderReply}
            valueHeading={form.find((e) => e.key == item.key)?.heading}
            valueReply={form.find((e) => e.key == item.key)?.reply}
            itemKey={item.key}
            setValueReply={setValueReply}
            setValueHeading={setValueHeading}
          />
        ))}
        <DashboardButton text={"Save"} />
      </div>
    </div>
  );
}

export default PersistentMenu;
