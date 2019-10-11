import React from "react"
import contactContentStyles from "./contact.module.scss"
import SubHeading from "../home/subHeading"
import ContactSocial from "./contactSocial"

const ContactContent = () => {
  return (
    <section className={contactContentStyles.contact}>
      <div className={contactContentStyles.contentWrapper}>
        <div className={contactContentStyles.heading}>
          <SubHeading title="You can also connect with me on..." />
        </div>

        <ContactSocial />
      </div>
    </section>
  )
}

export default ContactContent
