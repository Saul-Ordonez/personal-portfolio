import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Saul Ordonez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar/>
        <div className={styles.header__wrapper}>
          <h2 className={styles.header__text}>I'm Saúl And I Love To Code.</h2>
        </div>
        <div className={styles.profile}>
          <Image
            src="/profile.jpg"
            height={200}
            width={200}
            alt='Saul Ordonez'
          />
        </div>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus viverra gravida. Donec at ante a arcu congue ornare. Fusce vel scelerisque ex. In lobortis tincidunt mauris quis malesuada. Ut consectetur auctor tortor et luctus. Sed porta lacinia dapibus. Vivamus quis bibendum elit, non accumsan ipsum. Pellentesque feugiat metus quam, eu vestibulum lectus semper eget.</p>
            </div>
            <div className={styles.col}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus viverra gravida. Donec at ante a arcu congue ornare. Fusce vel scelerisque ex. In lobortis tincidunt mauris quis malesuada. Ut consectetur auctor tortor et luctus. Sed porta lacinia dapibus. Vivamus quis bibendum elit, non accumsan ipsum. Pellentesque feugiat metus quam, eu vestibulum lectus semper eget.</p>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}