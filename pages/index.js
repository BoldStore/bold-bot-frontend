import Head from "next/head";
import styles from "../styles/Home.module.css";
import Feature from "../components/Feature";
import Banner from "../components/Banner";
import { features } from "../components/Feature/features";
import ClientsWithUs from "../components/ClientsWithUs";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>BOLDbot</title>
        <meta name="description" content="" />
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
      <Header />
      <Banner />
      <div className={styles.container}>
        <ClientsWithUs />
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
              />
            );
          }
        })}
      </div>
    </>
  );
}
