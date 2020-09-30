import React from "react"
import { Link } from "react-scroll"
import heroStyles from "./headSection.module.scss"
import { FaChevronDown } from "react-icons/fa"
import Subscribe from "../subscribe/subscribe"
import lineSvg from "../../../static/assets/line.svg"

const Hero = () => {
  return (
    <section
      style={{
        background: `#fdfdfd url(${lineSvg}) center center fixed`,
      }}
      className={`hero__container ${heroStyles.homePageHero}`}
    >
      <div className={heroStyles.heroContent}>
        <h1 className={heroStyles.title}>web development articles</h1>
        <p className={heroStyles.description}>
          For self-starter who want to ditch the stress of going through
          technical bullshit and start learning in a beginner-friendly way.
        </p>

        <Link
          to="blog"
          className="btn-primary"
          smooth={true}
          offset={-64}
          duration={500}
        >
          get started
        </Link>

        <div className={heroStyles.additional}>
          <p>
            Get our <strong style={{ color: "#e55e34" }}>FREE</strong> React.js
            book and start building awesome projects:
          </p>
          <div className="home__subscribe">
            <Subscribe placeholder="Enter email to receive it" />
          </div>
        </div>
      </div>

      <Link
        to="blog"
        smooth={true}
        offset={-64}
        duration={500}
        className={heroStyles.arrow}
      >
        <FaChevronDown />
      </Link>
    </section>
  )
}

export default Hero
