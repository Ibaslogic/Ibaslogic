import React from "react"
import { Link } from "gatsby"
import heroStyles from "./headSection.module.scss"

const HeroError = () => {
  return (
    <div className={heroStyles.errorPageHero}>
      <div className={`${heroStyles.heroContent} ${heroStyles.error}`}>
        <h1 className={heroStyles.errorTitle}>404: Page not found</h1>
        <p className={heroStyles.errorDescription}>
          I guess you are here to become a better web developer. Click on the
          button below and check some of the latest dev articles.
        </p>
        <div className={heroStyles.heroButtonContainer}>
          <div className={heroStyles.errorButton}>
            <Link to="/blog/">go ahead</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroError
