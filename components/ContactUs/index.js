import React from 'react';
import styles from './styles.module.css';
import { motion } from 'framer-motion';
import InputComponent from '../DashboardComponents/InputComponent';
import DashboardButton from '../DashboardComponents/DashboardButton';
import { contactUs } from './contactUs';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { contactBold } from '../../store/actions/contact';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactValidationSchema } from './schema';

function ContactUs() {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactValidationSchema),
  });

  const contactSubmitHandler = async (data) => {
    console.log('data', data);
    await dispatch(contactBold(data));
  };

  return (
    <div className={styles.container} id='ContactUs'>
      <div className={styles.backgroundGradient} />
      <div className={styles.backgroundGradientMobile} />
      <div className={styles.contactUs}>
        <h2>Contact Us</h2>
        <h6>
          Want your own BOLD<span style={{ color: 'var(--blue)' }}>bot</span>?{' '}
          Fill in your details below or DM us{' '}
          <a
            href='https://www.instagram.com/boldbot.in/'
            target={'_blank'}
            className={styles.link}
            rel='noreferrer'
          >
            @boldbot.in
          </a>{' '}
          !
        </h6>
        <form onSubmit={handleSubmit(contactSubmitHandler)}>
          {contactUs.map((item) => {
            return (
              <InputComponent
                key={item.title}
                register={register}
                fieldName={item.fieldName}
                title={item.title}
                error={errors[item.fieldName]?.message}
                placeholder={item.placeholder}
                desc={item.desc}
                itemKey={item.key}
              />
            );
          })}
          <DashboardButton type={'submit'} text={'Submit'} />
        </form>
      </div>
      <motion.img
        src={'/assets/boldbotFeed.png'}
        className={styles.img}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          type: 'spring',
          repeat: Infinity,
        }}
      />
    </div>
  );
}

export default ContactUs;
