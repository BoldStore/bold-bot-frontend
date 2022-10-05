/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import DashboardButton from "../../components/DashboardComponents/DashboardButton";
import { persistentMenu } from "../../components/Lists/persistent-menu";
import styles from "../../styles/common.module.css";
import SecondaryInputComponent from "../../components/DashboardComponents/InputComponent/secondaryInput";
import { useDispatch, useSelector } from "react-redux";
import { addMenu, getMenu } from "../../store/actions/persistent-menu";
import Loader from "../../components/Loader";
import SEO from "../../components/SEO";

function PersistentMenu() {
  const hasPlan = true;
  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.menu);
  const userState = useSelector((state) => state.user);
  const [form, setForm] = useState([
    {
      key: "menuOption1",
      heading: "",
      reply: "",
    },
    // {
    //   key: "menuOption2",
    //   heading: "",
    //   reply: "",
    // },
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
    if (userState?.user && userState?.user?.pages?.length > 0) {
      dispatch(getMenu(userState?.user?.pages[0]?.id));
    }
  }, []);

  useEffect(() => {
    setData();
  }, [menuState?.menu || menuState?.web_data]);

  const setData = () => {
    if (menuState?.menu?.length > 0) {
      const menu_items = [];

      menuState.menu.forEach((menu, index) => {
        if (menu?.texts?.length > 0 && index <= 1)
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
      } else {
        menu_items.push({
          key: "storeLink",
          heading: "",
          reply: "",
        });
      }

      setForm(menu_items);
    }
  };

  const submit = () => {
    if (userState?.user && userState?.user?.pages?.length > 0) {
      const menu = [];
      let web_data = null;
      form.forEach((item, index) => {
        if (item.key !== "storeLink")
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
      const web = form.find((e) => e.key == "storeLink");
      if (web && web.key && web.reply) {
        web_data = {
          url: web.reply,
          title: web.heading,
        };
      }
      //FOR LIVE AGENT PM, TEMPORARY DELETE AFTER APPROVAL
      menu.push({
        question: "Live Agent",
        texts: [
          {
            key: "1",
            value:
              "Ok, I'm transferring you to a live agent now. A real person will be with you soon. Feel free to add any additional details now.",
          },
        ],
      });
      console.log("MENU >>>", menu);
      dispatch(addMenu(userState?.user?.pages[0]?.id, menu, web_data));
    }
  };

  if (menuState?.isLoading) {
    <Loader />;
  }

  return (
    <div className={styles.pageDiv}>
      <SEO
        title={"Persistent Menu"}
        desc={
          "Made an error along the way? No worries, we got you! The persistent menu in the tab allows customers to navigate the conversation better by giving them the option of not just starting over but also the choice to introduce other points of interest."
        }
      />
      <DashboardSidebar />
      <div className={styles.container}>
        <h3 className={styles.title}>Persistent Menu</h3>
        <p className={styles.introPara}>
          The persistent menu in the tab section allows for customers to
          navigate the conversation better by giving them the option of not just
          starting over but also the choice to introduce other points of
          interest.
        </p>
        <div>
          <img
            src="/assets/persistentMenuExample.png"
            alt="example"
            className={styles.img}
          />
        </div>
        {persistentMenu.map((item, i) => (
          <SecondaryInputComponent
            key={i}
            form={form}
            setForm={setForm}
            title={item.title}
            placeholderHeading={item.placeholderHeading}
            placeholderReply={item.placeholderReply}
            valueHeading={form.find((e) => e.key == item.key)?.heading}
            valueReply={form.find((e) => e.key == item.key)?.reply}
            itemKey={item.key}
            disable={!hasPlan}
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
