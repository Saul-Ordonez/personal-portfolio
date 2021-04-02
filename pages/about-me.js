import Link from 'next/link'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <NavBar/>
      <h2>About Me</h2>
      <footer>
        <Footer />
      </footer>
    </>
  )
}