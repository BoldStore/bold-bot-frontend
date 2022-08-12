import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import ClientsWithUs from "../components/ClientsWithUs";
import Header from "../components/Header/Header";
import Head from "next/head";
import Footer from "../components/Footer";
import OurPlans from "../components/OurPlans";
import OurFeatures from "../components/OurFeatures";

export default function Home() {
  return (
    <>
      <Head>
        <title>BOLDbot</title>
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
        <link rel="icon" href="/assets/Logo.svg" />
      </Head>
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
