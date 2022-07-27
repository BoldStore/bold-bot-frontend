import React from "react";
import styles from "./styles.module.css";

function InputComponent({ title, type, placeholder }) {
  return (
    <div className={styles.container}>
      {title && <h3>Greeting Message</h3>}
      <input type={type ?? "text"} placeholder={placeholder} />
    </div>
  );
}

export default InputComponent;
