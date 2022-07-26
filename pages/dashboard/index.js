import React from "react";
import styles from "../../styles/Dashboard.module.css";
import Head from "next/head";
import OverviewCard from "../../components/OverviewCard";

function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="" />
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
      <div
        className={styles.container}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <OverviewCard />
      </div>
    </>
  );
}

export default Dashboard;
