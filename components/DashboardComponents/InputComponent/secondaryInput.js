import React from "react";
import styles from "./styles.module.css";

function SecondaryInputComponent({
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
      {title && <h6 className={styles.title}>{title}</h6>}
      <p className={styles.desc2}>{"Heading"}</p>
      <input
        type={type ?? "text"}
        placeholder={placeholderHeading}
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e, itemKey)}
      />
      <p className={styles.desc2}>{"Reply"}</p>
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

export default SecondaryInputComponent;
