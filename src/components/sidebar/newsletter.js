import React from "react"
import newsletterStyles from "./sidebar.module.scss"

const Newsletter = () => {
  return (
    <div className={`${newsletterStyles.signUp} ${newsletterStyles.widget}`}>
      <p className={newsletterStyles.title}>Want Practical Tutorials?</p>
      <p className={newsletterStyles.description}>
        Get fresh web development updates straight to your inbox and start
        building real-world web applications.{" "}
      </p>
      <form className={newsletterStyles.formContainer} action="">
        <input
          className="fieldInput"
          type="text"
          name=""
          placeholder="Email here"
        />
        <button className="fieldSubmit" type="button">
          Sign up
        </button>

        <span className={newsletterStyles.guarantee}>
          100% Privacy. Guaranteed!
        </span>
      </form>
    </div>
  )
}

export default Newsletter
