import styles from "../styles/Home.module.css";
import Feature from "../components/Feature";
import Banner from "../components/Banner";
import { features } from "../components/Feature/features";
import ClientsWithUs from "../components/ClientsWithUs";
import Header from "../components/Header/Header";
import Head from "next/head";
import Footer from "../components/Footer";
import OurPlans from "../components/OurPlans";

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
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
      <Header />
      <Banner />
      <div className={styles.container}>
        {/* <ClientsWithUs /> */}
        {features.map((item, i) => {
          if (i % 2 == 0) {
            return (
              <Feature
                key={i}
                title={item.title}
                desc={item.desc}
                backgroundColor={item.backgroundColor}
                backgroundImage={item.backgroundImage}
                id={item.id}
                imgSrc={item.imgSrc}
              />
            );
          } else {
            return (
              <Feature
                key={i}
                title={item.title}
                desc={item.desc}
                isReverse={true}
                backgroundColor={item.backgroundColor}
                backgroundImage={item.backgroundImage}
                id={item.id}
                imgSrc={item.imgSrc}
              />
            );
          }
        })}
        <OurPlans />
      </div>
      <Footer />
    </>
  );
}
