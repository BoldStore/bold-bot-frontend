/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import DashboardButton from "../../components/DashboardComponents/DashboardButton";
import { persistentMenu } from "../../components/DashboardComponents/Lists/persistent-menu";
import styles from "../../styles/common.module.css";
import { features } from "../../components/Feature/features";
import SecondaryInputComponent from "../../components/DashboardComponents/InputComponent/secondaryInput";
import { useDispatch, useSelector } from "react-redux";
import { addMenu, getMenu } from "../../store/actions/persistent-menu";
import Loader from "../../components/Loader";

function PersistentMenu() {
  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.menu);
  const userState = useSelector((state) => state.user);

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
    {
      key: "storeLink",
      heading: "",
      reply: "",
    },
  ]);

  useEffect(() => {
    if (userState?.user && userState?.user?.pages?.length > 0) {
      dispatch(getMenu(userState?.user?.pages[0]?.id));
    }
  }, [userState?.user]);

  useEffect(() => {
    setData();
  }, [menuState?.menu || menuState?.web_data]);

  const setData = () => {
    if (menuState?.menu) {
      const menu_items = [];

      menuState.menu.forEach((menu, index) => {
        if (menu?.texts?.length > 0)
          menu_items.push({
            key: "menuOption" + (index + 1).toString(),
            heading: menu?.question,
            reply: menu?.texts[0]?.value,
          });
      });

      if (menuState?.web_data && menuState?.web_data?.texts?.length > 0) {
        menu_items.push({
          key: "storeLink",
          heading: menuState?.web_data?.texts[0]?.key,
          reply: menuState?.web_data?.texts[0]?.value,
        });
      }

      setForm(menu_items);
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
    const menu = [];
    const web_data = null;

    form.forEach((item, index) => {
      menu.push({
        question: item.heading,
        texts: [
          {
            key: index.toString(),
            value: item.reply,
          },
        ],
      });
    });

    dispatch(addMenu(userState?.user?.pages[0]?.id, menu, web_data));
  };

  if (menuState?.isLoading) {
    <Loader />;
  }

  return (
    <div className={styles.pageDiv}>
      <DashboardSidebar />
      <div className={styles.container}>
        <h3 className={styles.title}>Persistent Menu</h3>
        <p className={styles.introPara}>{features[2]["desc"]}</p>
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
        <DashboardButton
          text={menuState.isLoading ? "Loading..." : "Save"}
          onClick={submit}
        />
      </div>
    </div>
  );
}

export default PersistentMenu;
