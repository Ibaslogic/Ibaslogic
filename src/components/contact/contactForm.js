import React from "react"

import contactFormStyles from "./contact.module.scss"
import contactTopStyles from "./contact.module.scss"

const ContactForm = () => {
  return (
    <div className={contactTopStyles.contactForm}>
      <form
        name="contact"
        className={contactFormStyles.form}
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />{" "}
        <input type="hidden" name="form-name" value="contact" />{" "}
        <div className={`form__field ${contactFormStyles.formField}`}>

          <input
            className={contactFormStyles.textField}
            type="text"
            placeholder="First name"
            name="name"
            id="name"
            aria-label="your-name"
            required
          />

          <input
            className={contactFormStyles.emailField}
            type="text"
            placeholder="Your email"
            name="email"
            id="email"
            aria-label="your-email"
            required
          />

          <textarea
            name="message"
            placeholder="Your message"
            className={contactFormStyles.textareaField}
            id="message"
            aria-label="text-area"
            rows="6"
            required
          />

          <ul className={contactFormStyles.actions}>
            <li>
              <button aria-label="submit-form" className={contactFormStyles.submitButton}>
                Send Message
              </button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
