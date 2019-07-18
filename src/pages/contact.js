import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import ContactHero from "../components/contact/contactHero"
import ContactContent from "../components/contact/contactContent"

const ContactPage = () => (
  <Layout>
    <SEO title="Get in touch with Ibas" />
    <ContactHero />
    <ContactContent />
  </Layout>
)

export default ContactPage
