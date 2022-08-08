import React, { useState } from "react";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import InputComponent from "../../components/DashboardComponents/InputComponent";
import { iceBreakers } from "../../components/DashboardComponents/Lists/iceBreakers";
import styles from "../../styles/common.module.css";
import DashboardButton from "../../components/DashboardComponents/DashboardButton";
import { features } from "../../components/Feature/features";

function IceBreakerPage() {
  const [showExample, setShowExample] = useState(false);
  return (
    <div className={styles.pageDiv}>
      <DashboardSidebar />
      <div className={styles.container}>
        <h3 className={styles.title}>Ice Breakers</h3>
        <p className={styles.introPara}>{features[1]["desc"]}</p>
        <p
          className={styles.example}
          onClick={() => setShowExample(!showExample)}
        >
          Click here to view an example
        </p>
        {showExample && (
          <div>
            <img
              src="/assets/iceBreaker.png"
              alt="example"
              className={styles.img}
            />
          </div>
        )}
        {iceBreakers.map((item, i) => (
          <InputComponent
            key={i}
            title={item.title}
            desc={item.desc}
            placeholder={item.placeholder}
          />
        ))}
        <DashboardButton text={"Save"} />
      </div>
    </div>
  );
}

export default IceBreakerPage;
