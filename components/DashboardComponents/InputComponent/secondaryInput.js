import React from 'react';
import styles from './styles.module.css';

function SecondaryInputComponent({
  register = () => {},
  fieldName1,
  fieldName2,
  error1,
  error2,
  form,
  setForm,
  title,
  type,
  placeholderHeading,
  placeholderReply,
  valueHeading,
  valueReply,
  itemKey,
  disable,
}) {
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

  return (
    <div className={styles.container}>
      {title && <h6 className={styles.title}>{title}</h6>}
      <p className={styles.desc2}>{'Heading'}</p>
      <input
        type={type ?? 'text'}
        placeholder={placeholderHeading}
        className={styles.input}
        value={valueHeading}
        onChange={(e) => setValueHeading(e, itemKey)}
        disabled={disable}
        {...register(fieldName1)}
      />
      {error1 && <p className={styles.error}>{error1}</p>}
      {itemKey != 'storeLink' ? (
        <>
          <p className={styles.desc2}>{'Reply'}</p>
          <textarea
            type={type ?? 'text'}
            placeholder={placeholderReply}
            className={styles.textarea}
            value={valueReply}
            onChange={(e) => setValueReply(e, itemKey)}
            disabled={disable}
            {...register(fieldName2)}
          />
          {error2 && <p className={styles.error}>{error2}</p>}
        </>
      ) : (
        <>
          <p className={styles.desc2}>{'Link'}</p>
          <input
            type={type ?? 'text'}
            placeholder={placeholderReply}
            className={styles.input}
            value={valueReply}
            onChange={(e) => setValueReply(e, itemKey)}
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
