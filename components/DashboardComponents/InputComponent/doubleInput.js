import React from "react";
import styles from "./styles.module.css";

function DoubleInputComponent({
  title,
  type,
  placeholderHeading,
  placeholderReply,
  value,
  setValue,
  itemKey,
}) {
  return (
    <div className={styles.container}>
      {title && <h6 className={styles.title2}>{title}</h6>}
      <p className={styles.desc}>{"Heading"}</p>
      <input
        type={type ?? "text"}
        placeholder={placeholderHeading}
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e, itemKey)}
      />
      <p className={styles.desc}>{"Reply"}</p>
      <input
        type={type ?? "text"}
        placeholder={placeholderReply}
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e, itemKey)}
      />
    </div>
  );
}

export default DoubleInputComponent;
