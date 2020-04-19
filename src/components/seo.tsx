/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { MetadataQuery } from './__generated__/MetadataQuery'

type Meta = {
  name: string
  content: string
  property: any
}

type Props = {
  description: string
  lang: string
  meta: Meta[]
  title: string
}

const defaultProps: Props = {
  lang: 'en',
  description: '',
  meta: [],
  title: '',
}

function SEO({
  description = defaultProps.description,
  lang = defaultProps.lang,
  meta = defaultProps.meta,
  title = defaultProps.title,
}) {
  const { site }: MetadataQuery = useStaticQuery(
    graphql`
      query MetadataQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description ?? site?.siteMetadata?.description ?? ''

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site?.siteMetadata?.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site?.siteMetadata?.author ?? '',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
