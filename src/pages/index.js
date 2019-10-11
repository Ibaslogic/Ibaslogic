import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from "../components/headSection/hero"
import RecentPosts from "../components/home/recentPosts"
import AboutExcerpt from "../components/home/aboutExcerpt"

//import SidebarTitle from "../components/sidebar/sidebarTitle"

const IndexPage = () => (
  <Layout>
    <SEO title="Web Dev Tutorials" />
    <main className="main" role="main">
      <Hero />
      <AboutExcerpt />
      <RecentPosts />
    </main>
  </Layout>
)

export default IndexPage
