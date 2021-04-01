import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

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

      <div>
        <h2>
          <Link href="/about-me">
            About Me
          </Link>
        </h2>
      </div>

      <div>
        <h2>
          <Link href="/projects">
            Projects
          </Link>
        </h2>
      </div>

      <div>
        <h2>
          <Link href="/contact">
            Contact
          </Link>
        </h2>
      </div>

      <footer className={styles.footer}>
        <p>copyright 2021 Saul Ordonez</p>
      </footer>
    </div>
  )
}