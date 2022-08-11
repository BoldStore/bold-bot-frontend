/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import { iceBreakers } from "../../components/DashboardComponents/Lists/iceBreakers";
import styles from "../../styles/common.module.css";
import DashboardButton from "../../components/DashboardComponents/DashboardButton";
import SecondaryInputComponent from "../../components/DashboardComponents/InputComponent/secondaryInput";
import { useDispatch, useSelector } from "react-redux";
import { addIceBreaker, getIceBreaker } from "../../store/actions/ice-breaker";
import Loader from "../../components/Loader";

function IceBreakerPage() {
  const dispatch = useDispatch();
  const iceBreakerState = useSelector((state) => state.iceBreaker);
  const userState = useSelector((state) => state.user);
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

  useEffect(() => {
    if (userState?.user && userState?.user?.pages?.length > 0) {
      dispatch(getIceBreaker(userState?.user.pages[0]?.id));
    }
  }, [userState.user]);

  useEffect(() => {
    setData();
  }, [iceBreakerState.iceBreakers]);

  const setData = () => {
    if (iceBreakerState?.iceBreakers) {
      const ice_breakers = [];

      iceBreakerState.iceBreakers.forEach((iceBreaker, index) => {
        if (iceBreaker?.texts?.length > 0)
          ice_breakers.push({
            key: "iceBreaker" + (index + 1).toString(),
            heading: iceBreaker?.question,
            reply: iceBreaker?.texts[0]?.value,
          });
      });

      setForm(ice_breakers);
    }
  };

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

  const submit = () => {
    const ice_breakers = [];

    form.forEach((item, index) => {
      ice_breakers.push({
        question: item.heading,
        texts: [
          {
            key: index.toString(),
            value: item.reply,
          },
        ],
      });
    });

    dispatch(addIceBreaker(userState?.user?.pages[0]?.id, ice_breakers));
  };

  if (iceBreakerState?.isLoading) {
    <Loader />;
  }

  return (
    <div className={styles.pageDiv}>
      <DashboardSidebar />
      <div className={styles.container}>
        <h3 className={styles.title}>Ice Breakers</h3>
        <p className={styles.introPara}>
          Increase efficiency by adding ice breakers to your dms, skip the
          repetitive questions by introducing standardised texts which answer
          FAQs.
        </p>
        <div>
          <img
            src="/assets/iceBreakerExample.png"
            alt="example"
            className={styles.img}
          />
        </div>
        {iceBreakers.map((item, i) => (
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
        <DashboardButton
          text={iceBreakerState?.isLoading ? "Loading..." : "Save"}
          onClick={submit}
        />
      </div>
    </div>
  );
}

export default IceBreakerPage;
