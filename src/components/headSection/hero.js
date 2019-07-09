import React from "react"
import { Link } from "react-scroll"
import heroStyles from "./headSection.module.scss"

const Hero = () => {
  return (
    <div className={heroStyles.homePageHero}>
      <div className={heroStyles.heroContent}>
        <p className={heroStyles.description}>
          WebDev Articles for Self-Starter
        </p>
        <p className={heroStyles.title}>
          Learn the latest Dev technologies and start{" "}
          <span className={heroStyles.nl}></span> building real world web
          applications
        </p>

        <div className={heroStyles.heroButtonContainer}>
          <div className={heroStyles.startHere}>
            <Link
              //activeClass="active"
              to="blog"
              //spy={true}
              smooth={true}
              offset={-64}
              duration={500}
            >
              start here
            </Link>
          </div>
          {/* <div className={`${heroStyles.contact} ${heroStyles.button}`}>
            <a href="#!">get in touch</a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
