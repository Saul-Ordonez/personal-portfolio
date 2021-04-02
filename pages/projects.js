import Link from 'next/link'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <NavBar/>
      <h2>Projects</h2>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}