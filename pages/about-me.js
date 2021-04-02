import Link from 'next/link'
import Head from 'next/head'
import NavBar from '../components/NavBar'

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <NavBar/>
      <h1>About Me</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}