import React from "react";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import ProfileCard from "../../components/DashboardComponents/ProfileCard";
import ConnectedPages from "../../components/DashboardComponents/ProfileComponents/ConnectedPages";
import OurPlans from "../../components/OurPlans";
import styles from "../../styles/Profile.module.css";

function ProfilePage() {
  return (
    <div className={styles.pageDiv}>
      <DashboardSidebar />
      <div className={styles.container}>
        <ProfileCard />
        <ConnectedPages />
        <OurPlans center={true} />
      </div>
    </div>
  );
}

export default ProfilePage;
