import React, { useState } from "react";
import DashboardButton from "../DashboardButton";
import InputComponent from "../InputComponent";
import styles from "./styles.module.css";
function InfluencerProgram() {
  const [showCode, setShowCode] = useState(false);
  const [code, setCode] = useState("");
  const setValue = (e) => {
    setCode(e.target.value);
  };
  return (
    <div className={styles.container}>
      <p className={styles.example} onClick={() => setShowCode(!showCode)}>
        Are you an Influencer? Click here to join our Influencer Program.
      </p>
      {showCode && (
        <div>
          <InputComponent
            title={"Influencer Program"}
            desc={
              "The Influencer program is for influencers to come and do free marketing for us please write more text here"
            }
            value={code}
            placeholder={"Referral Code Here"}
            itemKey={"code"}
            setValue={setValue}
          />
          <DashboardButton text={"Join"} />
        </div>
      )}
    </div>
  );
}

export default InfluencerProgram;
