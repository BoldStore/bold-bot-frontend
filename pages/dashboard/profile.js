import React from "react";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import ProfileCard from "../../components/DashboardComponents/ProfileCard";
import ConnectedPages from "../../components/DashboardComponents/ProfileComponents/ConnectedPages";
import Plan from "../../components/Plan";
import FAQs from "../../components/FAQs";
import styles from "../../styles/Profile.module.css";
import InfluencerProgram from "../../components/DashboardComponents/InfluencerProgram";

function ProfilePage() {
  return (
    <div className={styles.pageDiv}>
      <DashboardSidebar />
      <div className={styles.container}>
        <ProfileCard />
        <ConnectedPages />
        {/* <OurPlans center={true} /> */}
        <h4 className={styles.heading4}>My Plan</h4>
        <Plan />
        <InfluencerProgram />
        <FAQs />
      </div>
    </div>
  );
}

export default ProfilePage;
