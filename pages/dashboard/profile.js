/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import ProfileCard from "../../components/DashboardComponents/ProfileCard";
import ConnectedPages from "../../components/DashboardComponents/ProfileComponents/ConnectedPages";
import Plan from "../../components/Plan";
import FAQs from "../../components/FAQs";
import styles from "../../styles/Profile.module.css";
import InfluencerProgram from "../../components/DashboardComponents/InfluencerProgram";
import { plans } from "../../components/OurPlans/plans";
import SEO from "../../components/SEO";
import { useDispatch } from "react-redux";
import { getUser } from "../../store/actions/user";

function ProfilePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className={styles.pageDiv}>
      <SEO title={"Profile"} />
      <DashboardSidebar />
      <div className={styles.container}>
        <ProfileCard />
        <ConnectedPages />
        {/* <OurPlans center={true} /> */}
        <h4 className={styles.heading4}>My Plan</h4>
        <Plan
          planName={plans[0].planName}
          planDesc={plans[0].planDesc}
          planPrice={plans[0].planPrice}
          icons={plans[0].icons}
        />
        <InfluencerProgram />
        <FAQs />
      </div>
    </div>
  );
}

export default ProfilePage;
