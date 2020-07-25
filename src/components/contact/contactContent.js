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
          email
        }
      }
    }
  `)
  return (
    <section className={contactContentStyles.contact__area}>
      <div className={contactContentStyles.main__container}>
        <p className={contactContentStyles.connect}>
          You can also send a direct mail to: <a href={`mailto:${data.site.siteMetadata.email}`}>ibas@ibaslogic.com</a> or connect with{" "}
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
