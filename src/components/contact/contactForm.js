import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import contactFormStyles from "./contact.module.scss"
import contactTopStyles from "./contact.module.scss"

const ContactForm = () => {
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
    <div className={contactTopStyles.topContainer}>
      <p className={contactTopStyles.inTouch}>
        Get in touch using the form below
      </p>
      <div className={contactTopStyles.mainContent}>
        <p className={contactTopStyles.connect}>
          ...Or you can connect with{" "}
          <a
            href={`https://twitter.com/${data.site.siteMetadata.twitterHandle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ibas on Twitter
          </a>
        </p>
        <form
          name="contact"
          className={contactFormStyles.form}
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />{" "}
          <input type="hidden" name="form-name" value="contact" />{" "}
          <div className={contactFormStyles.formField}>
            <input
              className={contactFormStyles.textField}
              type="text"
              placeholder="Your name"
              name="name"
              id="name"
              required
            />
            <input
              className={contactFormStyles.emailField}
              type="text"
              placeholder="Your email"
              name="email"
              id="email"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              className={contactFormStyles.textareaField}
              id="message"
              rows="6"
              required
            />
            <ul className={contactFormStyles.actions}>
              <li>
                <input
                  type="submit"
                  value="Send Message"
                  className={contactFormStyles.submitButton}
                />
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
