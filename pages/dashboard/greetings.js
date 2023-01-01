/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import DashboardSidebar from '../../components/DashboardComponents/DashboardSidebar';
import InputComponent from '../../components/DashboardComponents/InputComponent';
import { greetings } from '../../components/Lists/greetings';
import styles from '../../styles/common.module.css';
import DashboardButton from '../../components/DashboardComponents/DashboardButton';
import { useDispatch, useSelector } from 'react-redux';
import { addGreeting, getGreeting } from '../../store/actions/greeting';
import SEO from '../../components/SEO';
import Loader from '../../components/Loader';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { greetingValidationSchema } from '../../components/Schemas/greetingsSchema';

function GreetingsPage() {
  const disptach = useDispatch();
  const user = useSelector((state) => state.user);
  const greeting = useSelector((state) => state.greeting);

  const defaultValues = {
    introduction: '',
    welcome: '',
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(greetingValidationSchema),
    defaultValues,
  });

  const submitGreetingsHandler = (data) => {
    console.log('data', data);
    const form = [
      {
        key: 'introduction',
        value: data.introduction,
      },
      {
        key: 'welcome',
        value: data.welcome,
      },
    ];
    console.log('form', form);
    if (user && user.user && user?.user?.pages?.length > 0) {
      disptach(addGreeting(user?.user?.pages[0].id, form));
    }
  };

  useEffect(() => {
    if (user && user.user && user?.user?.pages?.length > 0) {
      disptach(getGreeting(user?.user?.pages[0].id));
    }
  }, [user.user]);

  useEffect(() => {
    if (
      greeting?.message &&
      greeting?.message?.length > 0 &&
      greeting?.message[0]?.texts?.length > 0
    ) {
      defaultValues.introduction = greeting.message[0].texts[0].value;
      defaultValues.introduction = greeting?.message[0].texts[1].value;
    }
  }, [greeting.message]);

  if (greeting.isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.pageDiv}>
      <SEO
        title={'Greetings'}
        desc={
          'Automated never means generic here at Bold. These are the first responses to a buyer’s dm. Each store can customize its greetings to cater to the needs and wants of its clientele as well as target markets. Design your own custom greetings which define you as a store when interacting with patrons.'
        }
      />
      <DashboardSidebar />
      <div className={styles.container}>
        <h3 className={styles.title}>Greetings</h3>
        <p className={styles.introPara}>
          Custom greetings are the first responses to a buyer&apos;s DM, design
          your own automated replies which define you as a brand.
        </p>
        <div>
          {/* <img
            src="/assets/greetingExample.png"
            alt="example"
            className={styles.img}
          /> */}
        </div>
        <form onSubmit={handleSubmit(submitGreetingsHandler)}>
          {greetings.map((item) => (
            <InputComponent
              register={register}
              key={item.title}
              fieldName={item.fieldName}
              error={errors[item.fieldName]?.message}
              title={item.title}
              desc={item.desc}
              placeholder={item.placeholder}
              itemKey={item.key}
            />
          ))}
          <DashboardButton type={'submit'} text={'Save'} />
        </form>
      </div>
    </div>
  );
}

export default GreetingsPage;
