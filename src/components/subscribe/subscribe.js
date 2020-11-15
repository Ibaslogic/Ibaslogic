import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

const Subscribe = props => {
  const [email, setEmail] = useState(``)
  const [status, setStatus] = useState(``)
  const [msg, setMsg] = useState(``)

  const _emailHandleChange = e => {
    const { value } = e.target
    setEmail(value)
  }

  // handle Submit
  const _handleFormSubmit = async e => {
    e.preventDefault()
    if (!email) {
      setStatus(`error`)
      setMsg(`Please enter a valid email`)
    } else {
      setStatus(`sending`)
      setMsg(``)

      try {
        const result = await addToMailchimp(email)
        //check for mailchimp errors or failures
        if (result.result !== `success`) {
          setStatus(`error`)
          setMsg(result.msg)
        } else {
          setStatus(`success`)
          setMsg(result.msg)
          setEmail(``)
        }
      } catch (err) {
        // Network failures, time out, etc
        setStatus(`error`)
        setMsg(err)
      }
    }
  }

  return (
    <>
      <form
        onSubmit={_handleFormSubmit}
        className="form__container"
        method="post"
        noValidate
      >
        <div className="email__input form__fields">
          <input
            className="field__input"
            type="text"
            value={email}
            onChange={_emailHandleChange}
            placeholder={`${props.placeholder || "Your Email Address"}`}
            aria-label="your-email"
          />

          <button
            style={{ outline: "none" }}
            className="field__submit"
            type="submit"
            aria-label="submit-button"
          >
            {props.submitText}
          </button>
        </div>

        {status === `success` ? (
          <div className="status__success">
            Thanks for subscribing! Youʼll receive your first email shortly.
          </div>
        ) : (
            <div
              className="status__error"
              dangerouslySetInnerHTML={{ __html: msg }}
            ></div>
          )}
      </form>
    </>
  )
}
export default Subscribe
