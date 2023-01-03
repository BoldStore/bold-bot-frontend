/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import DashboardSidebar from '../../components/DashboardComponents/DashboardSidebar';
import DashboardButton from '../../components/DashboardComponents/DashboardButton';
import { persistentMenu } from '../../components/Lists/persistent-menu';
import styles from '../../styles/common.module.css';
import SecondaryInputComponent from '../../components/DashboardComponents/InputComponent/secondaryInput';
import { useDispatch, useSelector } from 'react-redux';
import { addMenu, getMenu } from '../../store/actions/persistent-menu';
import Loader from '../../components/Loader';
import SEO from '../../components/SEO';
import { yupResolver } from '@hookform/resolvers/yup';
import { persistentMenuValidationSchema } from '../../components/Schemas/persistentMenuSchema';
import { useForm } from 'react-hook-form';

function PersistentMenu() {
  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.menu);
  const user = useSelector((state) => state.user);

  const defaultValues = {
    menuOption1Heading:
      menuState.menu?.texts?.length > 0 ? menuState?.menu[0]?.question : '',
    menuOption1Reply:
      menuState.menu?.texts?.length > 0
        ? menuState?.menu[0]?.texts[0]?.value
        : '',
    menuOption2Heading:
      menuState.menu?.texts?.length > 0 ? menuState?.menu[1]?.question : '',
    menuOption2Reply:
      menuState.menu?.texts?.length > 0
        ? menuState?.menu[1]?.texts[0]?.value
        : '',
    webDataUrl:
      menuState?.web_data && menuState?.web_data?.texts?.length > 0
        ? menuState?.web_data?.texts[0]?.key
        : '',
    webDataTitle:
      menuState?.web_data && menuState?.web_data?.texts?.length > 0
        ? menuState?.web_data?.texts[0]?.value
        : '',
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(persistentMenuValidationSchema),
    defaultValues,
  });

  const persistentMenuSubmitHandler = (data) => {
    console.log('data', data);
    const form = [
      {
        question: data.menuOption1Heading,
        texts: [
          {
            key: '0',
            value: data.menuOption1Reply,
          },
        ],
      },
      {
        question: data.menuOption2Heading,
        texts: [
          {
            key: '1',
            value: data.menuOption2Reply,
          },
        ],
      },
    ];
    const web_data = {
      url: data.webDataUrl,
      title: data.webDataTitle,
    };
    console.log('form', form);
    console.log('web data', web_data);
    if (user && user.user && user?.user?.pages?.length > 0) {
      dispatch(addMenu(user?.user?.pages[0]?.id, form, web_data));
    }
  };

  useEffect(() => {
    if (user?.user && user?.user?.pages?.length > 0) {
      dispatch(getMenu(user?.user?.pages[0]?.id));
    }
  }, [user?.user]);

  if (menuState?.isLoading) {
    <Loader />;
  }

  return (
    <div className={styles.pageDiv}>
      <SEO
        title={'Persistent Menu'}
        desc={
          'Made an error along the way? No worries, we got you! The persistent menu in the tab allows customers to navigate the conversation better by giving them the option of not just starting over but also the choice to introduce other points of interest.'
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
          {/* <img
            src="/assets/persistentMenuExample.png"
            alt="example"
            className={styles.img}
          /> */}
        </div>
        <form onSubmit={handleSubmit(persistentMenuSubmitHandler)}>
          {persistentMenu.map((item) => (
            <SecondaryInputComponent
              key={item.title}
              register={register}
              fieldName1={item.fieldName1}
              fieldName2={item.fieldName2}
              title={item.title}
              placeholderHeading={item.placeholderHeading}
              placeholderReply={item.placeholderReply}
              error1={errors[item.fieldName1]?.message}
              error2={errors[item.fieldName2]?.message}
              isLink={item.title === 'Website Link'}
            />
          ))}
          <DashboardButton text={menuState.isLoading ? 'Loading...' : 'Save'} />
        </form>
      </div>
    </div>
  );
}

export default PersistentMenu;
