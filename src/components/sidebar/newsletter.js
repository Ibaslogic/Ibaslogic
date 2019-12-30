import React, { Component } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import newsletterStyles from "./sidebar.module.scss"

class Newsletter extends Component {
  state = {
    fname: ``,
    email: ``,
  }

  // Update state each time user edits email address
  _handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  // handle Submit
  _handleFormSubmit = async e => {
    e.preventDefault()
    //e.stopPropagation()
    if (!this.state.email) {
      this.setState({
        status: `error`,
        msg: "Please enter a valid email",
      })
    } else if (!this.state.fname) {
      this.setState({
        status: `error`,
        msg: "Please enter your first name",
      })
    } else {
      this.setState({
        status: `sending`,
        msg: null,
      })

      try {
        // setState callback (subscribe email to MC)
        const result = await addToMailchimp(this.state.email, {
          FNAME: this.state.fname,
        })
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
            fname: "",
            email: "",
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
          Get the next fresh tutorial straight in your inbox and continue your
          web development learning journey!
        </p>
        <form
          onSubmit={this._handleFormSubmit}
          className={newsletterStyles.formContainer}
          method="post"
          noValidate
        >
          <input
            className={newsletterStyles.nameField}
            type="text"
            name="fname"
            value={this.state.fname}
            onChange={this._handleChange}
            placeholder="First Name"
          />
          <input
            className={newsletterStyles.emailField}
            type="text"
            name="email"
            value={this.state.email}
            onChange={this._handleChange}
            placeholder="Email Address"
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
              Thanks for subscribing! Youʼll receive your first email shortly.
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
