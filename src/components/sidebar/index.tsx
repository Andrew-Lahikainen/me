import { Link } from 'gatsby'
import React from 'react'
import { FaceIcon } from '../icons/face'
import styles from './styles.module.css'
import { BuildIcon } from '../icons/build'

export type SidebarProps = {
  className?: string
}

const Sidebar: React.FunctionComponent<SidebarProps> = ({ className }) => {
  return (
    <nav className={`${styles.nav} ${className ?? ''}`}>
      <ul>
        <li>
          <Link to="/me" className={styles.link} activeClassName={styles.activeLink}>
            <FaceIcon className={styles.icon} fill={'var(--accent)'}></FaceIcon>
            About me
          </Link>
        </li>
        <li>
          <Link to="/tools" className={styles.link} activeClassName={styles.activeLink}>
            <BuildIcon className={styles.icon} fill={'var(--accent)'}></BuildIcon>
            Tools
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
