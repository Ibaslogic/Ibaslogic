import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import RelatedArticles from "./RelatedArticles/relatedArticles"

import newsletterStyles from "./sidebar.module.scss"

const Newsletter = props => {
  // const [fname, setFname] = useState(``)
  const [email, setEmail] = useState(``)
  const [status, setStatus] = useState(``)
  const [msg, setMsg] = useState(``)

  // Update state each time user edits email address
  // const _fnameHandleChange = e => {
  //   const { value } = e.target
  //   setFname(value)
  // }
  const _emailHandleChange = e => {
    const { value } = e.target
    setEmail(value)
  }

  // handle Submit
  const _handleFormSubmit = async e => {
    e.preventDefault()
    //e.stopPropagation()
    if (!email) {
      setStatus(`error`)
      setMsg(`Please enter a valid email`)
    }
    // else if (!fname) {
    //   setStatus(`error`)
    //   setMsg(`Please enter your first name`)}
    else {
      setStatus(`sending`)
      setMsg(``)

      try {
        // setState callback (subscribe email to MC)
        // const result = await addToMailchimp(email, {
        //   FNAME: fname,
        // })
        const result = await addToMailchimp(email)
        //check for mailchimp errors or failures
        if (result.result !== `success`) {
          setStatus(`error`)
          setMsg(result.msg)
        } else {
          setStatus(`success`)
          setMsg(result.msg)
          // setFname(``)
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
    <div className={newsletterStyles.sticky}>
      <div className={`${newsletterStyles.signUp} ${newsletterStyles.widget}`}>
        <h3 className={newsletterStyles.title}>
          Do you want to <span style={{ fontWeight: "600" }}>learn</span> more?
        </h3>
        <p className={newsletterStyles.description}>
          Get the next tutorial straight to your inbox and continue your dev
          journey!
        </p>
        <form
          onSubmit={_handleFormSubmit}
          className={newsletterStyles.formContainer}
          method="post"
          noValidate
        >
          {/* <input
            className={newsletterStyles.nameField}
            type="text"
            name="fname"
            value={fname}
            onChange={_fnameHandleChange}
            placeholder="First Name"
          /> */}
          <div className={newsletterStyles.inputContainer}>
            <div className={newsletterStyles.emailInputContainer}>
              <div className={newsletterStyles.emailInput}>
                <input
                  className={newsletterStyles.emailField}
                  type="text"
                  value={email}
                  onChange={_emailHandleChange}
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className={newsletterStyles.submitInputContainer}>
              <div className={newsletterStyles.submitInput}>
                <button
                  style={{ outline: "none" }}
                  className="fieldSubmit"
                  type="submit"
                >
                  Yes, I want to learn!
                </button>
              </div>
            </div>
          </div>

          {status === `success` ? (
            <div className={newsletterStyles.success}>
              Thanks for subscribing! Youʼll receive your first email shortly.
            </div>
          ) : (
            <div
              className={newsletterStyles.error}
              dangerouslySetInnerHTML={{ __html: msg }}
            ></div>
          )}

          {/* <span className={newsletterStyles.guarantee}>
          100% Privacy. No spam. Guaranteed!
        </span> */}
          <div className={newsletterStyles.getInTouch}>
            <p>Not into email list?</p>{" "}
            <span>
              <a
                href={`https://twitter.com/${props.socialhandle}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow me on Twitter
              </a>
            </span>
          </div>
        </form>
      </div>
      {(props.relatedArticles.length && (
        <RelatedArticles articles={props.relatedArticles} slug={props.slug} />
      )) ||
        null}
    </div>
  )
}
export default Newsletter

// class Newsletter extends Component {
//   state = {
//     fname: ``,
//     email: ``,
//   }

//   // Update state each time user edits email address
//   _handleChange = e => {
//     const { name, value } = e.target
//     this.setState({
//       [name]: value,
//     })
//   }

//   // handle Submit
//   _handleFormSubmit = async e => {
//     e.preventDefault()
//     //e.stopPropagation()
//     if (!this.state.email) {
//       this.setState({
//         status: `error`,
//         msg: "Please enter a valid email",
//       })
//     } else if (!this.state.fname) {
//       this.setState({
//         status: `error`,
//         msg: "Please enter your first name",
//       })
//     } else {
//       this.setState({
//         status: `sending`,
//         msg: null,
//       })

//       try {
//         // setState callback (subscribe email to MC)
//         const result = await addToMailchimp(this.state.email, {
//           FNAME: this.state.fname,
//         })
//         //check for mailchimp errors or failures
//         if (result.result !== `success`) {
//           this.setState({
//             status: `error`,
//             msg: result.msg,
//           })
//         } else {
//           this.setState({
//             status: `success`,
//             msg: result.msg,
//             fname: "",
//             email: "",
//           })
//         }
//       } catch (err) {
//         // Network failures, time out, etc
//         this.setState({
//           status: `error`,
//           msg: err,
//         })
//       }
//     }
//   }

//   render() {
//     return (
//       <div className={`${newsletterStyles.signUp} ${newsletterStyles.widget}`}>
//         <h3 className={newsletterStyles.title}>
//           Do you want to <span className={newsletterStyles.nl}></span>{" "}
//           <span style={{ fontWeight: "600" }}>Learn</span> more?
//         </h3>
//         <p className={newsletterStyles.description}>
//           Get the next tutorial straight to your inbox and continue your dev
//           journey!
//         </p>
//         <form
//           onSubmit={this._handleFormSubmit}
//           className={newsletterStyles.formContainer}
//           method="post"
//           noValidate
//         >
//           <input
//             className={newsletterStyles.nameField}
//             type="text"
//             name="fname"
//             value={this.state.fname}
//             onChange={this._handleChange}
//             placeholder="First Name"
//           />
//           <input
//             className={newsletterStyles.emailField}
//             type="text"
//             name="email"
//             value={this.state.email}
//             onChange={this._handleChange}
//             placeholder="Email Address"
//           />
//           <button
//             style={{ outline: "none" }}
//             className="fieldSubmit"
//             type="submit"
//           >
//             I want to learn more
//           </button>

//           {this.state.status === `success` ? (
//             <div className={newsletterStyles.success}>
//               Thanks for subscribing! Youʼll receive your first email shortly.
//             </div>
//           ) : (
//             <div
//               className={newsletterStyles.error}
//               dangerouslySetInnerHTML={{ __html: this.state.msg }}
//             ></div>
//           )}

//           {/* <span className={newsletterStyles.guarantee}>
//             100% Privacy. No spam. Guaranteed!
//           </span> */}
//           <div className={newsletterStyles.getInTouch}>
//             <p>Not into email list, but still want to learn more? </p>
//             <span>
//               <a
//                 href={`https://twitter.com/${this.props.socialhandle}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Follow me on Twitter
//               </a>
//             </span>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

// export default Newsletter
