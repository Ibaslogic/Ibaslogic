import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Privacy from "../components/privacy"

const PrivacyNotice = () => (
  <Layout>
    <SEO title="Privacy" />
    <section className="main" role="main">
      <Privacy />
    </section>
  </Layout>
)

export default PrivacyNotice