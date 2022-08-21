import React from "react";
import styles from "./styles.module.css";

function InputComponent({
  title,
  type,
  placeholder,
  desc,
  value,
  setValue,
  itemKey,
  disable,
}) {
  return (
    <div className={styles.container}>
      {title && <h6 className={styles.title}>{title}</h6>}
      {desc && <p className={styles.desc}>{desc}</p>}
      <input
        type={type ?? "text"}
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e, itemKey)}
        disabled={disable}
      />
    </div>
  );
}

export default InputComponent;
