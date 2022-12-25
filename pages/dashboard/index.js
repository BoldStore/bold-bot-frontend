import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "../../store/actions/user";
import { getPlans } from "../../store/actions/plan";

function Dashboard() {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.user?.user?.pages);
  const stats = useSelector((state) => state.user.stats);
  const plan = useSelector((state) => state.user.plan);
  const plans = useSelector((state) => state.plan.plans);

  useEffect(() => {
    if (pages?.length > 0) dispatch(getStats(pages[0].id));
  }, [dispatch, pages]);

  useEffect(() => {
    if (!plan) {
      dispatch(getPlans());
    }
  }, [dispatch, plan]);

  return (
    <div className={styles.pageDiv}>
      <SEO title={"Dashboard"} />
      <DashboardSidebar />
      {!plan ? (
        <div className={styles.container2}>
          <h2>Choose A Plan</h2>
          <div className={styles.plansFlex}>
            {plans?.map((item, i) => {
              return (
                <div className={styles.planDiv} key={i}>
                  <Plan
                    key={i}
                    planName={item.name}
                    planDesc={item.description}
                    planPrice={`₹${item.price / 100}`}
                    icons={[]}
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
            {features.map((item, i) => {
              return (
                <OverviewCard
                  key={i}
                  title={item.title}
                  desc={item.desc.slice(0, 70) + "..."}
                  used={
                    stats?.filter((e) => e.serviceName == item.id)[0]?._count ??
                    0
                  }
                  total={
                    plan?.services?.filter((e) => e.serviceName == item.id)[0]
                      ?.replies ?? 100
                  }
                  pageHref={item.pageHref}
                  comingSoon={item.comingSoon}
                  interactions={
                    stats?.filter((e) => e.serviceName == item.id)[0]?._count ??
                    0
                  }
                  status={
                    stats?.filter((e) => e.service == item.id).length > 0
                      ? "Active"
                      : "Inactive"
                  }
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
