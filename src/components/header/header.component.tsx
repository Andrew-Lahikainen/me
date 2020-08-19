import { Link } from 'gatsby'
import React from 'react'
import { BuildIcon } from '../icons/build'
import { ChildCareIcon } from '../icons/child-care'
import { FaceIcon } from '../icons/face'
import styles from './header.module.css'

export const Header = () => (
  <header className={styles.header}>
    <h1 style={{ margin: 0 }}>Andrew Lahikainen</h1>
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
      <Link className={styles.navItem} activeClassName={styles.navItemActive} to="/me/">
        <ChildCareIcon fill="white" className={styles.navItemIcon}></ChildCareIcon>
        About me
      </Link>
    </nav>
  </header>
)
