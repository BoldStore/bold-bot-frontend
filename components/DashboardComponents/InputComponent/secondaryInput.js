import React from 'react';
import styles from './styles.module.css';

function SecondaryInputComponent({
  register = () => {},
  fieldName1,
  fieldName2,
  error1,
  error2,
  title,
  type,
  placeholderHeading,
  placeholderReply,
  disable,
  isLink,
}) {
  return (
    <div className={styles.container}>
      {title && <h6 className={styles.title}>{title}</h6>}
      <p className={styles.desc2}>{'Heading'}</p>
      <input
        type={type ?? 'text'}
        placeholder={placeholderHeading}
        className={styles.input}
        disabled={disable}
        {...register(fieldName1)}
      />
      {error1 && <p className={styles.error}>{error1}</p>}
      {isLink ? (
        <>
          <p className={styles.desc2}>{'Link'}</p>
          <input
            type={type ?? 'text'}
            placeholder={placeholderReply}
            className={styles.input}
            disabled={disable}
            {...register(fieldName2)}
          />
          {error2 && <p className={styles.error}>{error2}</p>}
        </>
      ) : (
        <>
          <p className={styles.desc2}>{'Reply'}</p>
          <textarea
            type={type ?? 'text'}
            placeholder={placeholderReply}
            className={styles.textarea}
            disabled={disable}
            {...register(fieldName2)}
          />
          {error2 && <p className={styles.error}>{error2}</p>}
        </>
      )}
    </div>
  );
}

export default SecondaryInputComponent;
