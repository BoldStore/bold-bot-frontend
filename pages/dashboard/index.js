import React from "react";
import styles from "../../styles/Dashboard.module.css";
import Head from "next/head";
import ProfileCard from "../../components/DashboardComponents/ProfileCard";
import DashboardHeader from "../../components/DashboardComponents/DashboardHeader";
import OverviewCard from "../../components/DashboardComponents/OverviewCard";
function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="" />
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
      <DashboardHeader />
      <div className={styles.container}>
        <div className={styles.overviewFlex}>
          <OverviewCard />
          <OverviewCard />
          <OverviewCard />
          <OverviewCard />
        </div>
        <ProfileCard />
      </div>
    </>
  );
}

export default Dashboard;
