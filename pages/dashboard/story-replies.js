/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import DashboardSidebar from '../../components/DashboardComponents/DashboardSidebar';
import { storyReply } from '../../components/Lists/story';
import styles from '../../styles/common.module.css';
import DashboardButton from '../../components/DashboardComponents/DashboardButton';
import { useDispatch, useSelector } from 'react-redux';
import SEO from '../../components/SEO';
import SecondaryInputComponent from '../../components/DashboardComponents/InputComponent/secondaryInput';
import {
  addStoryReplies,
  getStoryReplies,
} from '../../store/actions/story-reply';
import Loader from '../../components/Loader';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { storyReplyValidationSchema } from '../../components/Schemas/storyReplySchema';

function StoryRepliesPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const replies = useSelector((state) => state.reply);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(storyReplyValidationSchema),
  });

  const storyReplySubmitHandler = (data) => {
    console.log('data', data);
    const form = [
      {
        question: data.heading,
        texts: [
          {
            key: '1',
            value: data.reply,
          },
        ],
      },
    ];
    console.log('form', form);
    if (user && user.user && user?.user?.pages?.length > 0) {
      dispatch(addStoryReplies(user?.user?.pages[0].id, form));
    }
  };

  useEffect(() => {
    if (
      replies?.message &&
      replies?.message?.length > 0 &&
      replies?.message[0].texts?.length > 0
    ) {
      setValue('heading', replies.message[0].question);
      setValue('reply', replies.message[0].texts[0].value);
    }
  }, [replies]);

  useEffect(() => {
    if (user && user.user && user?.user?.pages?.length > 0) {
      dispatch(getStoryReplies(user?.user?.pages[0].id));
    }
  }, [user.user]);

  if (replies?.isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.pageDiv}>
      <SEO
        title={'Story Replies'}
        desc='Set customised automated replies whenever someone replies to your story with the keyword of your choice! This will help you take product advertisements and brand/event promotions to a new level! Convert your DMs into the automated assistant of your dreams with our custom templates to help sell your merchandise. Use our templates to link your products with ease.'
      />
      <DashboardSidebar />
      <div className={styles.container}>
        <h3 className={styles.title}>Story Replies</h3>
        <p className={styles.introPara}>
          Set customised automated replies whenever someone replies to your
          story with the keyword of your choice! This will help you take product
          advertisements and brand/event promotions to a new level.
        </p>
        <div>
          {/* <img
            src="/assets/storyReplyExample.png"
            alt="example"
            className={styles.img}
          /> */}
        </div>
        <form onSubmit={handleSubmit(storyReplySubmitHandler)}>
          {storyReply.map((item) => {
            return (
              <SecondaryInputComponent
                key={item.title}
                register={register}
                title={item.title}
                placeholderHeading={item.placeholderHeading}
                placeholderReply={item.placeholderReply}
                fieldName1={item.fieldName1}
                fieldName2={item.fieldName2}
                error1={errors[item.fieldName1]?.message}
                error2={errors[item.fieldName2]?.message}
              />
            );
          })}
          <DashboardButton text={'Save'} />
        </form>
      </div>
    </div>
  );
}

export default StoryRepliesPage;
