import React, { Component } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import newsletterStyles from "./sidebar.module.scss"

class Newsletter extends Component {
  state = {
    email: ``,
  }

  // Update state each time user edits email address
  _handleEmailChange = e => {
    this.setState({
      email: e.target.value,
    })
  }

  // handle Submit
  _handleFormSubmit = async e => {
    e.preventDefault()
    //e.stopPropagation()
    if (!this.state.email) {
      this.setState({
        status: `error`,
        msg: "Please enter your email",
      })
    } else {
      this.setState({
        status: `sending`,
        msg: null,
      })

      try {
        // setState callback (subscribe email to MC)
        const result = await addToMailchimp(this.state.email)
        //check for mailchimp errors or failures
        if (result.result !== `success`) {
          this.setState({
            status: `error`,
            msg: result.msg,
          })
        } else {
          this.setState({
            status: `success`,
            msg: result.msg,
          })
        }
      } catch (err) {
        // Network failures, time out, etc
        this.setState({
          status: `error`,
          msg: err,
        })
      }
    }
  }

  render() {
    return (
      <div className={`${newsletterStyles.signUp} ${newsletterStyles.widget}`}>
        <p className={newsletterStyles.title}>
          Do you want to <span style={{ fontWeight: "600" }}>Learn</span> more?
        </p>
        <p className={newsletterStyles.description}>
          Get fresh tutorials straight to your inbox and start learning how to
          build real-world web applications.{" "}
        </p>
        <form
          onSubmit={this._handleFormSubmit}
          className={newsletterStyles.formContainer}
          method="post"
          noValidate
        >
          <input
            className="fieldInput"
            type="text"
            onChange={this._handleEmailChange}
            placeholder="Email here"
          />
          <button
            style={{ outline: "none" }}
            className="fieldSubmit"
            type="submit"
          >
            I want to learn more
          </button>

          {this.state.status === `success` ? (
            <div className={newsletterStyles.success}>
              Welcome to the family! Youʼll receive your first email shortly.
            </div>
          ) : (
            <div
              className={newsletterStyles.error}
              dangerouslySetInnerHTML={{ __html: this.state.msg }}
            ></div>
          )}

          <span className={newsletterStyles.guarantee}>
            100% Privacy. No spam. Guaranteed!
          </span>
        </form>
      </div>
    )
  }
}

export default Newsletter
