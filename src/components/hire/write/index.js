import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
const Write = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `)
  return (
    <>
      Like this guide? Want me to write (article, ebook) for you? Send a direct mail to <a href={`mailto:${data.site.siteMetadata.email}`}>ibas@ibaslogic.com</a>.
    </>
  )
}
export default Write
