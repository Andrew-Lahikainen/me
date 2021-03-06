import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout/layout'
import { ProfilePhoto } from '../components/profile-photo/profile-photo'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout centered={true}>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p className="body-1">Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <ProfilePhoto></ProfilePhoto>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
