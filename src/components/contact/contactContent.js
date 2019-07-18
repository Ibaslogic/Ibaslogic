import React from "react"
import contactContentStyles from "./contact.module.scss"
import SubHeading from "../home/subHeading"
import ContactSocial from "./contactSocial"

const ContactContent = () => {
  return (
    <section className={contactContentStyles.contact}>
      <div className={contactContentStyles.contentWrapper}>
        <SubHeading title="You can also connect with me on..." />
        <ContactSocial />
      </div>
    </section>
  )
}

export default ContactContent
