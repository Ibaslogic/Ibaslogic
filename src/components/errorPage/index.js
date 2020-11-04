import React from "react"
import { Link } from "gatsby"
import errorStyles from "./errorPage.module.scss"

const HeroContent = () => {
  return (
    <div className={errorStyles.errorContent}>
      <h1 className={errorStyles.errorTitle}>not found</h1>
      <p className={errorStyles.errorDescription}>
        I guess you are here to become a better web developer. Check <Link to="/blog/">this page</Link> for our latest dev guides.
        </p>
    </div>
  )
}

export default HeroContent
