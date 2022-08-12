import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import ClientsWithUs from "../components/ClientsWithUs";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import OurPlans from "../components/OurPlans";
import OurFeatures from "../components/OurFeatures";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <Banner />
      <div className={styles.container}>
        {/* <ClientsWithUs /> */}
        <OurFeatures />
        <OurPlans />
      </div>
      <Footer />
    </>
  );
}
