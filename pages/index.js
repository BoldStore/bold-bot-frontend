import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Feature from '../components/Feature'

export default function Home() {
  return (
    <div className={styles.container} style={{display:"flex", justifyContent:"center"}}>
      <Head>
        <title>BOLDbot</title>
        <meta name="description" content="" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <Feature/>
    </div>
  )
}
