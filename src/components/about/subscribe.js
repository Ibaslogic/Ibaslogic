import React, { Component } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import aboutContentStyles from "./about.module.scss"

class Subscribe extends Component {
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
      <>
        <div className={aboutContentStyles.formContent}>
          <p className={aboutContentStyles.heading}>{this.props.heading}</p>
          <p className={aboutContentStyles.description}>
            {this.props.subHeading}
            {/* Then hop on the newsletter and get free tips and tricks. */}
          </p>
        </div>

        <form onSubmit={this._handleFormSubmit} method="post" noValidate>
          <div className={aboutContentStyles.formFields}>
            <input
              className={aboutContentStyles.fieldInput}
              type="text"
              onChange={this._handleEmailChange}
              placeholder="Email here"
            />
            <button
              style={{ outline: "none" }}
              className={aboutContentStyles.fieldSubmit}
              type="submit"
            >
              {this.props.submitText}
            </button>
          </div>

          {this.state.status === `success` ? (
            <div className={aboutContentStyles.success}>
              Thanks for subscribing! Youʼll receive your first email shortly.
            </div>
          ) : (
            <div
              className={aboutContentStyles.error}
              dangerouslySetInnerHTML={{ __html: this.state.msg }}
            ></div>
          )}
        </form>
      </>
    )
  }
}

export default Subscribe
