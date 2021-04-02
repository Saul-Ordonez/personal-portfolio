import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import NavBar from '../components/NavBar'

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Saul Ordonez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar/>
      </main>

      <footer className={styles.footer}>
        <p>copyright 2021 Saul Ordonez</p>
      </footer>
    </div>
  )
}