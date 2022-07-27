import React from "react";
import styles from "./styles.module.css";

function InputComponent({ title, type, placeholder, desc }) {
  return (
    <div className={styles.container}>
      {title && <p className={styles.title}>{title}</p>}
      {desc && <p className={styles.desc}>{desc}</p>}
      <input
        type={type ?? "text"}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
}

export default InputComponent;
