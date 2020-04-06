import React from "react"
import contactHeadingStyles from "./contact.module.scss"

const ContactHero = () => {
  return (
    <section className={contactHeadingStyles.heading}>
      <h1>How can I help?</h1>
      <h3>
        Do you want to talk about your project? Or have a question for me?
      </h3>
    </section>
  )
}

export default ContactHero
