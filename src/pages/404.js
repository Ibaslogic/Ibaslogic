import React from "react"

import Layout from "../components/layout"
import HeroContent from "../components/errorPage"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="main" role="main">
      <HeroContent />
    </section>
  </Layout>
)

export default NotFoundPage
