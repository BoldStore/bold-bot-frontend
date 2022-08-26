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
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/actions/user";
import Link from "next/link";
import DashboardButton from "../../components/DashboardComponents/DashboardButton";
import {
  CLIENT_ID,
  FACEBOOK_AUTH_URL,
  REDIRECT_URI,
  SCOPE,
} from "../../constants";
import { useRouter } from "next/router";

function ProfilePage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, []);
  const hasPlan = true;

  const connectPage = () => {
    const url = `${FACEBOOK_AUTH_URL}?response_type=token&display=popup&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;
    router.push(url);
  };

  return (
    <div className={styles.pageDiv}>
      <SEO title={"Profile"} />
      <DashboardSidebar />
      <div className={styles.container}>
        <ProfileCard />
        {user?.user?.pages?.length > 0 ? (
          <ConnectedPages />
        ) : (
          <>
            <h6>No pages connected</h6>
            <DashboardButton onClick={connectPage} text="Connect Page" />
          </>
        )}
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
