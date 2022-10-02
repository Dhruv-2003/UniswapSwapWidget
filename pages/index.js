import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { SwapWidget, darkTheme, Theme } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Uniswap Widget</title>
        <meta name="description" content="Next app to try Uniswap Widget" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="Uniswap">
          <SwapWidget theme={darkTheme} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/0xdhruva"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by @0xDhruva
        </a>
        <a href="https://github.com/Dhruv-2003">Github</a>
      </footer>
    </div>
  );
}
