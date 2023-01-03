import React from 'react';
import styles from './styles.module.css';

function InputComponent({
  register = () => {},
  title,
  fieldName,
  type,
  placeholder,
  desc,
  disable,
  error,
}) {
  return (
    <div className={styles.container}>
      {title && <h6 className={styles.title}>{title}</h6>}
      {desc && <p className={styles.desc}>{desc}</p>}
      <input
        type={type ?? 'text'}
        placeholder={placeholder}
        className={styles.input}
        disabled={disable}
        {...register(fieldName)}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default InputComponent;
