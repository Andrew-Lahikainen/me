import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styles from './layout.module.css'
import Sidebar from './sidebar'

type Props = {
  children: React.ReactChild[]
}

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(query)

  return (
    <div className={styles.layout}>
      <Sidebar className={styles.sidebar}></Sidebar>
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout
