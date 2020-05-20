import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import contactContentStyles from "./contact.module.scss"
import ContactForm from "./contactForm"

const ContactContent = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitterHandle
        }
      }
    }
  `)
  return (
    <section className={contactContentStyles.contact__area}>
      <div className={contactContentStyles.main__container}>
        <p className={contactContentStyles.connect}>
          ...Or you can connect with{" "}
          <a
            href={`https://twitter.com/${data.site.siteMetadata.twitterHandle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ibas on Twitter
          </a>
        </p>
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactContent
