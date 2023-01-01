import React from 'react';
import styles from './styles.module.css';

function DashboardButton({ onClick, text, type }) {
  return (
    <button
      type={type}
      className={styles.container}
      onClick={
        onClick
          ? () => {
              onClick();
            }
          : null
      }
    >
      <p>{text}</p>
    </button>
  );
}

export default DashboardButton;
