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
import Link from "next/link";

function ProfilePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const hasPlan = true;

  return (
    <div className={styles.pageDiv}>
      <SEO title={"Profile"} />
      <DashboardSidebar />
      <div className={styles.container}>
        <ProfileCard />
        <ConnectedPages />

        <h4 className={styles.heading4}>My Plan</h4>
        {hasPlan ? (
          <Plan
            planName={plans[0].planName}
            planDesc={plans[0].planDesc}
            planPrice={plans[0].planPrice}
            icons={plans[0].icons}
            noButton={true}
          />
        ) : (
          <Link href="/dashboard">
            <p className={styles.link}>Click Here To Buy A Plan.</p>
          </Link>
        )}

        <FAQs />
      </div>
    </div>
  );
}

export default ProfilePage;
