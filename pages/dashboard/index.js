import React from "react";
import styles from "../../styles/Dashboard.module.css";
import ProfileCard from "../../components/DashboardComponents/ProfileCard";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import OverviewCard from "../../components/DashboardComponents/OverviewCard";
import { features } from "../../components/Feature/features";
import SEO from "../../components/SEO";
import { plans } from "../../components/OurPlans/plans";
import Plan from "../../components/Plan";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import InfluencerProgram from "../../components/DashboardComponents/InfluencerProgram";

function Dashboard() {
  const hasPlan = false;
  return (
    <div className={styles.pageDiv}>
      <SEO title={"Dashboard"} />
      <DashboardSidebar />
      {!hasPlan ? (
        <div className={styles.container2}>
          <h2>Choose A Plan</h2>
          <div className={styles.plansFlex}>
            {plans.map((item, i) => {
              return (
                <div className={styles.planDiv} key={i}>
                  <Plan
                    key={i}
                    planName={item.planName}
                    planDesc={item.planDesc}
                    planPrice={item.planPrice}
                    icons={item.icons}
                  />
                </div>
              );
            })}
          </div>
          <InfluencerProgram />
        </div>
      ) : (
        <div className={styles.container}>
          <ProfileCard />
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
        </div>
      )}
    </div>
  );
}

export default Dashboard;
