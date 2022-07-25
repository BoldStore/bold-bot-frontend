import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Feature from "../components/Feature";
import Client from "../components/ClientsWithUs/Client";
import Banner from "../components/Banner";
import { features } from "../components/Feature/features";
import ClientsWithUs from "../components/ClientsWithUs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BOLDbot</title>
        <meta name="description" content="" />
        <link rel="icon" href="/assets/Logo.png" />
      </Head>

      <Banner />
      <div className={styles.container}>
        <ClientsWithUs />
        {features.map((item, i) => {
          if (i % 2 == 0) {
            return (
              <Feature
                title={item.title}
                desc={item.desc}
                backgroundColor={item.backgroundColor}
                backgroundImage={item.backgroundImage}
              />
            );
          } else {
            return (
              <Feature
                title={item.title}
                desc={item.desc}
                isReverse={true}
                backgroundColor={item.backgroundColor}
                backgroundImage={item.backgroundImage}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
