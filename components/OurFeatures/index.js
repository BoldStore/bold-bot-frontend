import React from "react";
import { features } from "../Feature/features";
import Feature from "../Feature";
import styles from "./styles.module.css";

function OurFeatures() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Our Features</h3>
      {features.map((item, i) => {
        if (i % 2 == 0) {
          return (
            <Feature
              key={i}
              title={item.title}
              desc={item.desc}
              backgroundColor={item.backgroundColor}
              backgroundImage={item.backgroundImage}
              id={item.id}
              imgSrc={item.imgSrc}
            />
          );
        } else {
          return (
            <Feature
              key={i}
              title={item.title}
              desc={item.desc}
              isReverse={true}
              backgroundColor={item.backgroundColor}
              backgroundImage={item.backgroundImage}
              id={item.id}
              imgSrc={item.imgSrc}
            />
          );
        }
      })}
    </div>
  );
}

export default OurFeatures;
