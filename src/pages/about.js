import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutContent from "../components/about/aboutContent"

const AboutPage = () => (
  <Layout>
    <SEO
      title="About Ibas"
      description="Ibas Majid is a web developer, teacher and a creative writer. He specializes in developing realistic websites and web applications using the latest tools and tech. He also writes technical contents around this subject."
    />
    <AboutContent />
  </Layout>
)

export default AboutPage
