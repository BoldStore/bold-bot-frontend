import React from "react";
import styles from "./styles.module.css";

function SecondaryInputComponent({
  title,
  type,
  placeholderHeading,
  placeholderReply,
  valueHeading,
  valueReply,
  setValueHeading,
  setValueReply,
  itemKey,
  disable,
}) {
  return (
    <div className={styles.container}>
      {title && <h6 className={styles.title}>{title}</h6>}
      <p className={styles.desc2}>{"Heading"}</p>
      <input
        type={type ?? "text"}
        placeholder={placeholderHeading}
        className={styles.input}
        value={valueHeading}
        onChange={(e) => setValueHeading(e, itemKey)}
        disabled={disable}
      />

      {itemKey != "storeLink" ? (
        <>
          <p className={styles.desc2}>{"Reply"}</p>
          <textarea
            type={type ?? "text"}
            placeholder={placeholderReply}
            className={styles.textarea}
            value={valueReply}
            onChange={(e) => setValueReply(e, itemKey)}
            disabled={disable}
          />
        </>
      ) : (
        <>
          <p className={styles.desc2}>{"Link"}</p>
          <input
            type={type ?? "text"}
            placeholder={placeholderReply}
            className={styles.input}
            value={valueHeading}
            onChange={(e) => setValueHeading(e, itemKey)}
            disabled={disable}
          />
        </>
      )}
    </div>
  );
}

export default SecondaryInputComponent;
