import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import ContactHero from "../components/contact/contactHero"
import ContactContent from "../components/contact/contactContent"

const ContactPage = () => (
  <Layout>
    <SEO
      title="Get in touch with Ibas"
      description="Do you want to talk about your project? Or have a question for me? Send me an email and I will get back to you shortly."
    />
    <ContactHero />
    <ContactContent />
  </Layout>
)

export default ContactPage
