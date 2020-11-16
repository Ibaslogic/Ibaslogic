import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/headSection/hero"
import FeaturedGuides from "../components/home/featuredGuides"
import AboutExcerpt from "../components/home/aboutExcerpt"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <Layout>
    <SEO title="Helping You Improving Your Web Dev Knowledge!" description="Looking for a simple and smarter way to learn the latest web tech? Here, you will learn the perfect strategy that works." />
    <Helmet>
      <html className="home-page" />
    </Helmet>
    <main className="main" role="main">
      <Hero />
      <AboutExcerpt />
      <FeaturedGuides />
    </main>
  </Layout>
)

export default IndexPage
