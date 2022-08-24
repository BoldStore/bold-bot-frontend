import React from "react";
import styles from "./styles.module.css";

function InputComponent({
  title,
  type,
  placeholder,
  desc,
  value,
  itemKey,
  disable,
  form,
  setForm,
}) {
  const setValue = (e, itemKey) => {
    const inputIndex = form.findIndex((i) => {
      return i.key === itemKey;
    });

    const input = {
      ...form[inputIndex],
    };

    input.value = e.target.value;

    const inputs = [...form];
    inputs[inputIndex] = input;

    setForm(inputs);
  };

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
