import React from "react"
import { Link } from "gatsby"
import heroStyles from "./headSection.module.scss"

const HeroError = () => {
  return (
    <div className={heroStyles.errorPageHero}>
      <div className={heroStyles.errorContent}>
        <h1 className={heroStyles.errorTitle}>not found</h1>
        <p className={heroStyles.errorDescription}>
          I guess you are here to become a better web developer. Check the
          <Link to="/blog/">Tutorial page</Link> for our latest dev guides.
        </p>
      </div>
    </div>
  )
}

export default HeroError
