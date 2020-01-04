import React from "react"
import contactHeroStyles from "./contact.module.scss"

const ContactHero = () => {
  return (
    <section className={contactHeroStyles.contactHero}>
      <div className={contactHeroStyles.imageFilter}></div>
      <div className={contactHeroStyles.heroContentWrapper}>
        <div className={contactHeroStyles.bannerContent}>
          <h1>How can I help?</h1>
          <p>
            Do you want to talk about your project? Or have a question for me?
            Get in touch using the form below.
            {/* Send me an email and <span className={contactHeroStyles.nl}></span>{" "}
            I will get back to you shortly. */}
          </p>
        </div>

        {/* <div className={contactHeroStyles.sendButton}>
          <a href="mailto:ibas@ibaslogic.com">Email me</a>
        </div> */}
      </div>
    </section>
  )
}

export default ContactHero
