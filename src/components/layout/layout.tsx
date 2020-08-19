import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Header } from '../header'
import styles from './layout.module.css'

type Props = {
  children: React.ReactChild[]
  centered: boolean
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

const Layout = ({ children, centered }: Props) => {
  const data = useStaticQuery(query)

  return (
    <div className={styles.layout}>
      <Header></Header>
      <main className={`${styles.main} ${centered ? styles.mainCentered : ''}`}>{children}</main>
    </div>
  )
}

export default Layout
