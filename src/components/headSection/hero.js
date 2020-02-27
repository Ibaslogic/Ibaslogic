import React from "react"
import { Link } from "react-scroll"
import heroStyles from "./headSection.module.scss"
import { FaChevronDown } from "react-icons/fa"

const Hero = () => {
  return (
    <div className={heroStyles.homePageHero}>
      <div className={heroStyles.heroContent}>
        <h1 className={heroStyles.title}>
          Web Dev Articles for the <span className={heroStyles.nlt}></span>
          Self-Starter
        </h1>
        <h3 className={heroStyles.description}>
          Click on the button below and start learning the latest web{" "}
          <span className={heroStyles.nl}></span>
          technologies for your next web project.
        </h3>

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
              get started
            </Link>
          </div>
          {/* <div className={`${heroStyles.contact} ${heroStyles.button}`}>
            <a href="#!">get in touch</a>
          </div> */}
        </div>
      </div>

      <Link
        //activeClass="active"
        to="blog"
        //spy={true}
        smooth={true}
        offset={-64}
        duration={500}
        className={heroStyles.arrow}
      >
        <FaChevronDown />
      </Link>
    </div>
  )
}

export default Hero
