import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import AboutHero from "../components/about/aboutHero"
import AboutContent from "../components/about/aboutContent"

const AboutPage = () => (
  <Layout>
    <SEO title="About Ibas" />
    <AboutHero />
    <AboutContent />
  </Layout>
)

export default AboutPage
