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
        background: `#373636 url(${lineSvg}) center center fixed`,
      }}
      className={`hero__container ${heroStyles.homePageHero}`}
    >
      <div className={heroStyles.heroContent}>
        <h1 className={heroStyles.title}>Dev Articles for the Self-Starters</h1>
        <p className={heroStyles.description}>
          Ditch the stress of going through technical bullshit and start learning in a beginner-friendly way.
        </p>

        <p className={heroStyles.additional}>
          No fluff or jargons! Just practical guides that work.
        </p>

        <Link
          to="featured"
          className={`btn-primary ${heroStyles.btn_primary}`}
          smooth={true}
          offset={-64}
          duration={500}
        >
          get started
        </Link>

        <div className={heroStyles.subscribe_container}>
          <p>
            Hold on! Get our <strong style={{ color: "#ff7c3c" }}>FREE</strong> React.js
            book and start building awesome projects:
          </p>
          <div className="home__subscribe">
            <Subscribe customClass="" placeholder="Enter email to receive it" />
          </div>
        </div>
      </div>

      <Link
        to="featured"
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
