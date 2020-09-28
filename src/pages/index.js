import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/headSection/hero"
import RecentPosts from "../components/home/recentPosts"
import AboutExcerpt from "../components/home/aboutExcerpt"

const IndexPage = () => (
  <Layout>
    <SEO title="Helping You Improving Your Web Dev Knowledge!" />
    <main className="main" role="main">
      <Hero />
      <AboutExcerpt />
      <RecentPosts />
    </main>
  </Layout>
)

export default IndexPage
