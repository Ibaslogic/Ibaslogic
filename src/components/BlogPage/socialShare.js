import React from "react"
import ShareItems from "./shareItems"

class SocialShare extends React.Component {
  render() {
    const { slug, title, heading, twitterHandle, siteUrl } = this.props

    return (
      <>
        <ShareItems
          heading={heading}
          slug={slug}
          title={title}
          twitterHandle={twitterHandle}
          siteUrl={siteUrl}
        />
      </>
    )
  }
}

export default SocialShare
