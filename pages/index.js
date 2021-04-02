import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Saul Ordonez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar/>
        <h2>Home</h2>
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}