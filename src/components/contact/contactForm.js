import React from "react"

import contactFormStyles from "./contact.module.scss"

const ContactForm = () => {
  return (
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
          {/* <li>
            <input
              type="reset"
              className={contactFormStyles.resetButton}
              value="Clear"
            />
          </li> */}
        </ul>
      </div>
    </form>
  )
}

export default ContactForm
