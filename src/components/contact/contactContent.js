import React from "react"
import contactContentStyles from "./contact.module.scss"
import ContactForm from "./contactForm"

const ContactContent = () => {
  return (
    <section className={contactContentStyles.contact}>
      <div className={contactContentStyles.contentWrapper}>
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactContent
