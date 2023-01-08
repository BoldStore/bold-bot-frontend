/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import DashboardSidebar from '../../components/DashboardComponents/DashboardSidebar';
import { iceBreakersList } from '../../components/Lists/iceBreakers';
import styles from '../../styles/common.module.css';
import DashboardButton from '../../components/DashboardComponents/DashboardButton';
import SecondaryInputComponent from '../../components/DashboardComponents/InputComponent/secondaryInput';
import { useDispatch, useSelector } from 'react-redux';
import { addIceBreaker, getIceBreaker } from '../../store/actions/ice-breaker';
import Loader from '../../components/Loader';
import SEO from '../../components/SEO';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { iceBreakersValidationSchema } from '../../components/Schemas/iceBreakersSchema';

function IceBreakerPage() {
  const dispatch = useDispatch();
  const iceBreakers = useSelector((state) => state.iceBreaker);
  const user = useSelector((state) => state.user);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(iceBreakersValidationSchema),
  });

  const iceBreakersSubmitHandler = (data) => {
    console.log('data', data);
    const form = [
      {
        question: data.iceBreaker1Heading,
        texts: [
          {
            key: '0',
            value: data.iceBreaker1Reply,
          },
        ],
      },
      {
        question: data.iceBreaker2Heading,
        texts: [
          {
            key: '1',
            value: data.iceBreaker2Reply,
          },
        ],
      },
      {
        question: data.iceBreaker3Heading,
        texts: [
          {
            key: '2',
            value: data.iceBreaker3Reply,
          },
        ],
      },
      {
        question: data.iceBreaker4Heading,
        texts: [
          {
            key: '3',
            value: data.iceBreaker4Reply,
          },
        ],
      },
    ];
    console.log('form', form);
    if (user && user.user && user?.user?.pages?.length > 0) {
      dispatch(addIceBreaker(user?.user?.pages[0]?.id, form));
    }
  };

  useEffect(() => {
    if (
      iceBreakers?.iceBreakers &&
      iceBreakers?.iceBreakers?.length &&
      iceBreakers?.iceBreakers[0]?.texts &&
      iceBreakers?.iceBreakers[1]?.texts &&
      iceBreakers?.iceBreakers[2]?.texts &&
      iceBreakers?.iceBreakers[3]?.texts
    ) {
      setValue('iceBreaker1Heading', iceBreakers?.iceBreakers[0]?.question);
      setValue(
        'iceBreaker1Reply',
        iceBreakers?.iceBreakers[0]?.texts[0]?.value
      );
      setValue('iceBreaker2Heading', iceBreakers?.iceBreakers[1]?.question);
      setValue(
        'iceBreaker2Reply',
        iceBreakers?.iceBreakers[1]?.texts[0]?.value
      );
      setValue('iceBreaker3Heading', iceBreakers?.iceBreakers[2]?.question);
      setValue(
        'iceBreaker3Reply',
        iceBreakers?.iceBreakers[2]?.texts[0]?.value
      );
      setValue('iceBreaker4Heading', iceBreakers?.iceBreakers[3]?.question);
      setValue(
        'iceBreaker4Reply',
        iceBreakers?.iceBreakers[3]?.texts[0]?.value
      );
    }
  }, [iceBreakers]);

  useEffect(() => {
    if (user?.user && user?.user?.pages?.length > 0) {
      dispatch(getIceBreaker(user?.user.pages[0]?.id));
    }
  }, [user.user]);

  if (iceBreakers?.isLoading) {
    <Loader />;
  }

  return (
    <div className={styles.pageDiv}>
      <SEO
        title={'Ice Breakers'}
        desc={
          "Increase efficiency of service by introducing ice breakers to your customer's DMs. These standardised texts cover certain frequently asked questions for your patrons to choose from. This allows the customer to verbalise and convey their concerns or queries to the store with ease."
        }
      />
      <DashboardSidebar />
      <div className={styles.container}>
        <h3 className={styles.title}>Ice Breakers</h3>
        <p className={styles.introPara}>
          Increase efficiency by adding ice breakers to your DMs, skip the
          repetitive questions by introducing standardised texts which answer
          frequently asked questions.
        </p>
        <div>
          {/* <img
            src="/assets/iceBreakerExample.png"
            alt="example"
            className={styles.img}
          /> */}
        </div>
        <form onSubmit={handleSubmit(iceBreakersSubmitHandler)}>
          {iceBreakersList.map((item) => (
            <SecondaryInputComponent
              register={register}
              fieldName1={item.fieldName1}
              fieldName2={item.fieldName2}
              key={item.title}
              title={item.title}
              placeholderHeading={item.placeholderHeading}
              placeholderReply={item.placeholderReply}
              error1={errors[item.fieldName1]?.message}
              error2={errors[item.fieldName2]?.message}
            />
          ))}
          <DashboardButton
            text={iceBreakers?.isLoading ? 'Loading...' : 'Save'}
          />
        </form>
      </div>
    </div>
  );
}

export default IceBreakerPage;
