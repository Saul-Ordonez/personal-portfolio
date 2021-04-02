import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const NavBar = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.row}>
            <Link href="/">
              <a className={styles.col}>Home</a>
            </Link>
            <Link href="/about-me">
              <a className={styles.col}>About Me</a>
            </Link>
            <Link href="/projects">
              <a className={styles.col}>Projects</a>
            </Link>
            <Link href="/contact">
              <a className={styles.col}>Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar;