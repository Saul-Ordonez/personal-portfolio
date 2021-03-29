import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Saul Ordonez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.background}>
        <div className={styles.header}>
          <h1>Saul Ordonez</h1>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>copyright 2021 Saul Ordonez</p>
      </footer>
    </div>
  )
}
