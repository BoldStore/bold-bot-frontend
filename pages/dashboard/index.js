import React from "react";
import styles from "../../styles/Dashboard.module.css";
import Head from "next/head";
import ProfileCard from "../../components/DashboardComponents/ProfileCard";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import OverviewCard from "../../components/DashboardComponents/OverviewCard";
import { features } from "../../components/Feature/features";

function Dashboard() {
  return (
    <div className={styles.pageDiv}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="" />
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
      <DashboardSidebar />
      <div className={styles.container}>
        <div className={styles.backgroundGradient} />
        <div className={styles.backgroundGradientMobile} />
        <div className={styles.overviewFlex}>
          {features.map((item, i) => (
            <OverviewCard
              key={i}
              title={item.title}
              desc={item.desc.slice(0, 70) + "..."}
              used={3}
              total={4}
              pageHref={item.pageHref}
              comingSoon={item.comingSoon}
            />
          ))}
        </div>
        <ProfileCard />
      </div>
    </div>
  );
}

export default Dashboard;
