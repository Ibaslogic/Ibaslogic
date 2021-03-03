import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Terms from "../components/terms"

const TermsOfService = () => (
  <Layout>
    <SEO title="Terms of service" />
    <section className="main" role="main">
      <Terms />
    </section>
  </Layout>
)

export default TermsOfService
