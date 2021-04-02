import Link from 'next/link'
import Head from 'next/head'
import NavBar from '../components/NavBar'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <NavBar/>
      <h1>Projects</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}