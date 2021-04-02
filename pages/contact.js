import Link from 'next/link'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <NavBar/>
      <h2>Contact</h2>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}