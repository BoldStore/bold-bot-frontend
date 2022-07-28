import React from "react";
import styles from "./styles.module.css";

function InputComponent({ title, type, placeholder, desc }) {
  return (
    <div className={styles.container}>
      {title && <h6 className={styles.title}>{title}</h6>}
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
