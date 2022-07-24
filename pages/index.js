import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Feature from "../components/Feature";
import Client from "../components/ClientsWithUs/Client";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BOLDbot</title>
        <meta name="description" content="" />
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
      <Client />
      <Feature />
      <Feature isReverse={true} />
      <Feature />
      <Feature isReverse={true} />
    </div>
  );
}
