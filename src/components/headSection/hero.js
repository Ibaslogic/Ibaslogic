import React from "react"
import { Link } from "react-scroll"
import heroStyles from "./headSection.module.scss"
import { FaChevronDown } from "react-icons/fa"

const Hero = () => {
  return (
    <div className={heroStyles.homePageHero}>
      <div className={heroStyles.heroContent}>
        <h1 className={heroStyles.title}>Ready to build modern web project?</h1>
        <p className={heroStyles.description}>
          Click on the button below and start learning the latest
          web technologies to develop modern applications and websites.
          {/* <span className={heroStyles.nl}></span>  */}
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
