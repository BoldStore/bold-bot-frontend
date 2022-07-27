import React from "react";
import styles from "./styles.module.css";

function InputComponent({ title, type, placeholder }) {
  return (
    <div className={styles.container}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <input
        type={type ?? "text"}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
}

export default InputComponent;
