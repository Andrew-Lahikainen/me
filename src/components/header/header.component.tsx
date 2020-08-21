import { Link } from 'gatsby'
import React from 'react'
import { BuildIcon } from '../icons/build'
import { FaceIcon } from '../icons/face'
import styles from './header.module.css'

export const Header = () => (
  <header className={styles.header}>
    <Link className={styles.headingLink} to="/">
      <h1 style={{ margin: 0 }}>Andrew Lahikainen</h1>
    </Link>
    <span className="flex-spacer"></span>
    <nav className={`${styles.nav} body-1`}>
      <Link className={styles.navItem} activeClassName={styles.navItemActive} to="/blog/">
        <FaceIcon fill="white" className={styles.navItemIcon}></FaceIcon>
        Blog
      </Link>
      <Link className={styles.navItem} activeClassName={styles.navItemActive} to="/tools/">
        <BuildIcon fill="white" className={styles.navItemIcon}></BuildIcon>
        Tools
      </Link>
    </nav>
  </header>
)
