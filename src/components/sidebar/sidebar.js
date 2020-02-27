import React from "react"
import RecentPosts from "./recentPosts"
import Newsletter from "./newsletter"

const Sidebar = ({ twitterHandle }) => {
  return (
    <>
      <RecentPosts />
      <Newsletter socialhandle={twitterHandle} />
    </>
  )
}

export default Sidebar
