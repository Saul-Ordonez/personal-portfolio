import Link from 'next/link'
import Head from 'next/head'
import NavBar from '../components/NavBar'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <NavBar/>
      <h1>Contact</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}