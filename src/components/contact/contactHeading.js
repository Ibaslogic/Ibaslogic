import React from "react"
import contactHeadingStyles from "./contact.module.scss"

const ContactHero = () => {
  return (
    <section className={contactHeadingStyles.heading}>
      <div className={contactHeadingStyles.container}>
        <h1 className={contactHeadingStyles.hero__title}>How can I help?</h1>
        <p className={contactHeadingStyles.hero__subtitle}>
          Want to talk about your project? Or maybe you have a question for me?
          <span className={contactHeadingStyles.nl}></span> Get in touch using
          the form below.
        </p>
      </div>
    </section>
  )
}

export default ContactHero
