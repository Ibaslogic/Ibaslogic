import React from "react"
import contactContentStyles from "./contact.module.scss"
import SubHeading from "../home/subHeading"
import ContactSocial from "./contactSocial"
import ContactForm from "./contactForm"

const ContactContent = () => {
  return (
    <section className={contactContentStyles.contact}>
      <div className={contactContentStyles.contentWrapper}>
        <ContactForm />
        <div className={contactContentStyles.heading}>
          <SubHeading title="Or you can find me on..." />
        </div>

        <ContactSocial />
      </div>
    </section>
  )
}

export default ContactContent
