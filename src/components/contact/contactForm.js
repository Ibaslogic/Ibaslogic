import React from "react"
import contactFormStyles from "./contact.module.scss"

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />{" "}
      <input type="hidden" name="form-name" value="contact" />{" "}
      <div className={`form__field ${contactFormStyles.formField}`}>
        <select
          className={`bd_bg_dm ${contactFormStyles.selectField}`}
          arial-label="I'd like to talk about"
          name="discus"
          required
        >
          <option value="" disabled selected>I'd like to talk about...</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Consulting Inquiry">Consulting Inquiry</option>
          <option value="Speaking Request">Speaking Request</option>
          <option value="Feedback and suggestions">Feedback and suggestions</option>
          <option value="Ibaslogic Site - Feature request">Ibaslogic Site Feature request</option>
        </select>

        <input
          className={`bd_bg_dm ${contactFormStyles.textField}`}
          type="text"
          placeholder="Name"
          name="name"
          aria-label="your-name"
          required
        />

        <input
          className={`bd_bg_dm ${contactFormStyles.emailField}`}
          type="text"
          placeholder="Email Address"
          name="email"
          aria-label="your-email"
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          className={`bd_bg_dm ${contactFormStyles.textareaField}`}
          aria-label="text-area"
          rows="6"
          required
        />
      </div>
      <div className={contactFormStyles.actions}>
        <button aria-label="submit-form" className="btn-primary">
          Submit
        </button>
      </div>
    </form>
  )
}

export default ContactForm
