import React, { useState } from "react";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import { iceBreakers } from "../../components/DashboardComponents/Lists/iceBreakers";
import styles from "../../styles/common.module.css";
import DashboardButton from "../../components/DashboardComponents/DashboardButton";
import { features } from "../../components/Feature/features";
import SecondaryInputComponent from "../../components/DashboardComponents/InputComponent/secondaryInput";

function IceBreakerPage() {
  const [showExample, setShowExample] = useState(false);
  const [form, setForm] = useState([
    {
      key: "iceBreaker1",
      heading: "",
      reply: "",
    },
    {
      key: "iceBreaker2",
      heading: "",
      reply: "",
    },
    {
      key: "iceBreaker3",
      heading: "",
      reply: "",
    },
    {
      key: "iceBreaker4",
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
        <h3 className={styles.title}>Ice Breakers</h3>
        <p className={styles.introPara}>{features[1]["desc"]}</p>
        <p
          className={styles.example}
          onClick={() => setShowExample(!showExample)}
        >
          Click here to view an example
        </p>
        {showExample && (
          <div>
            <img
              src="/assets/iceBreaker.png"
              alt="example"
              className={styles.img}
            />
          </div>
        )}
        {iceBreakers.map((item, i) => (
          <SecondaryInputComponent
            key={i}
            title={item.title}
            placeholderHeading={item.placeholderHeading}
            placeholderReply={item.placeholderReply}
            valueHeading={form.find((e) => e.key == item.key).heading}
            valueReply={form.find((e) => e.key == item.key).reply}
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

export default IceBreakerPage;
