import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styles from './profile-photo.module.css'

const query = graphql`
  query ProfilePhotoQuery {
    profilePhoto: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 200, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export const ProfilePhoto = () => {
  const data = useStaticQuery(query)

  return (
    <Img
      className={styles.profilePhoto}
      fixed={data.profilePhoto.childImageSharp.fixed}
      alt="Profile view of me"
    ></Img>
  )
}
