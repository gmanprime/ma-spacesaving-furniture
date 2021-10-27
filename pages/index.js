// system imports
import Head from "next/head";
import Image from "next/image";

// components
import Header from "../components/Header";
import Gallery from "../components/Gallery";

// page styles
import styles from "../styles/Home.module.css";

const siteDecript = ""; //metadata description

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content={siteDecript} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Gallery />
    </div>
  );
}
