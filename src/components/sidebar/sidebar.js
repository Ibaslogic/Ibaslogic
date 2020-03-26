import React from "react"
import RecentPosts from "./recentPosts"
import Newsletter from "./newsletter"

const Sidebar = ({ relatedArticles, twitterHandle, slug }) => {
  return (
    <>
      <RecentPosts />
      <Newsletter
        relatedArticles={relatedArticles}
        slug={slug}
        socialhandle={twitterHandle}
      />
    </>
  )
}

export default Sidebar
