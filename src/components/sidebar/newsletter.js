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
        {this.state.status === `success` ? (
          <div>Thank you! Youʼll receive your first email shortly.</div>
        ) : (
          <>
            <p className={newsletterStyles.title}>Want Practical Tutorials?</p>
            <p className={newsletterStyles.description}>
              Get fresh web development updates straight to your inbox and start
              building real-world web applications.{" "}
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
                Sign up
              </button>
              {this.state.status === `error` && (
                <div
                  style={{ color: "#f55f2d", marginTop: "10px" }}
                  dangerouslySetInnerHTML={{ __html: this.state.msg }}
                ></div>
              )}

              <span className={newsletterStyles.guarantee}>
                100% Privacy. Guaranteed!
              </span>
            </form>
          </>
        )}
      </div>
    )
  }
}

export default Newsletter
