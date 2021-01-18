import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { FaTwitter } from "react-icons/fa"

import styles from "./shareItems.module.scss"

const TwitterFollow = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitterHandle
        }
      }
    }
  `)

  const twitter = data.site.siteMetadata.twitterHandle

  return (
    <a className={styles.twitterFollowBtn} href={`https://twitter.com/intent/follow?screen_name=${twitter}&amp;region=follow_link`} rel="noopener noreferrer" target="_blank" >
      <span><FaTwitter /></span> Follow @ibaslogic
    </a>
  )
}

export default TwitterFollow
