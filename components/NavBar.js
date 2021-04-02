import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const NavBar = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.row}>
            <Link className={styles.col} href="/">
              Home
            </Link>
            <Link className={styles.col} href="../pages/about-me">
              About Me
            </Link>
            <Link className={styles.col} href="../pages/projects">
              Projects
            </Link>
            <Link className={styles.col} href="../pages/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar;