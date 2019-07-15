import React from "react"

import Layout from "../components/layout"
import HeroError from "../components/headSection/heroError"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="main" role="main">
      <HeroError />
    </section>
  </Layout>
)

export default NotFoundPage
