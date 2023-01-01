/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import DashboardSidebar from '../../components/DashboardComponents/DashboardSidebar';
import InputComponent from '../../components/DashboardComponents/InputComponent';
import { storyMention } from '../../components/Lists/story';
import styles from '../../styles/common.module.css';
import DashboardButton from '../../components/DashboardComponents/DashboardButton';
import { useDispatch, useSelector } from 'react-redux';
import SEO from '../../components/SEO';
import {
  addStoryMention,
  getStoryMentions,
} from '../../store/actions/story-mention';
import Loader from '../../components/Loader';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { storyMentionValidationSchema } from '../../components/Schemas/storyMentionSchema';

function StoryMentionsPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const mentions = useSelector((state) => state.mention);

  const defaultValues = {
    storyMention: '',
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(storyMentionValidationSchema),
    defaultValues,
  });

  const storyMentionSubmitHandler = (data) => {
    console.log('data', data);
    const form = [
      {
        key: '1',
        value: data.storyMention,
      },
    ];
    console.log('form', form);
    if (user && user.user && user?.user?.pages?.length > 0) {
      dispatch(addStoryMention(user?.user?.pages[0].id, form));
    }
  };

  useEffect(() => {
    if (user && user.user && user?.user?.pages?.length > 0) {
      dispatch(getStoryMentions(user?.user?.pages[0].id));
    }
  }, [user.user]);

  useEffect(() => {
    if (
      mentions?.message &&
      mentions?.message?.length > 0 &&
      mentions?.message[0]?.texts?.length > 0
    ) {
      defaultValues.storyMention = mentions.message[0].texts[0].value;
    }
  }, [mentions.message]);

  if (mentions?.isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.pageDiv}>
      <SEO
        title={'Story Mentions'}
        desc='Set customised automated replies whenever someone replies to your story with the keyword of your choice! This will help you take product advertisements and brand/event promotions to a new level! Convert your DMs into the automated assistant of your dreams with our custom templates to help sell your merchandise. Use our templates to link your products with ease.'
      />
      <DashboardSidebar />
      <div className={styles.container}>
        <h3 className={styles.title}>Story Mentions</h3>
        <p className={styles.introPara}>
          Set customisable automated replies whenever someone mentions you in
          their Instagram stories! Assign unique texts to keep your interactions
          going with patrons and followers.
        </p>
        <div>
          {/* <img
            src="/assets/storyMentionExample.png"
            alt="example"
            className={styles.img}
          /> */}
        </div>
        <form onSubmit={handleSubmit(storyMentionSubmitHandler)}>
          {storyMention.map((item) => {
            if (item.key == 'story-mention') {
              return (
                <InputComponent
                  register={register}
                  key={item.key}
                  title={item.title}
                  desc={item.desc}
                  fieldName={item.fieldName}
                  placeholder={item.placeholder}
                  error={errors[item.fieldName]?.message}
                />
              );
            }
          })}
          <DashboardButton type={'submit'} text={'Save'} />
        </form>
      </div>
    </div>
  );
}

export default StoryMentionsPage;
