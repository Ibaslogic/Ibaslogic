import React from "react"
import { Link } from "react-scroll"
import heroStyles from "./headSection.module.scss"
import { FaChevronDown } from "react-icons/fa"
import Subscribe from "../subscribe/subscribe"

const Hero = () => {
  return (
    <div className={`hero__container ${heroStyles.homePageHero}`}>
      <div className={heroStyles.heroContent}>
        <h1 className={heroStyles.title}>
          Web Dev Articles for the <span className={heroStyles.nlt}></span>
          Self-Starter
        </h1>
        <p className={heroStyles.description}>
          Connect the dots (the latest web technologies) and complete a{" "}
          <span className={heroStyles.nl}></span>real-world project.
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
        </div>
        <div className={heroStyles.additional}>
          <p>
            Get our React JS book (valued at $14.99) for <strong>FREE</strong>{" "}
            and start building awesome projects.
            {/* Enter your email below and
            receive it in your inbox.{" "} */}
          </p>
          <div className="home__subscribe">
            <Subscribe placeholder="Enter email to receive it" />
          </div>
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
