import React from "react"
import { Link } from "react-scroll"
import heroStyles from "./headSection.module.scss"
import Subscribe from "../subscribe/subscribe"
import lineSvg from "../../../static/assets/line.svg"
import TwitterFollow from "../socialShare/twitterFollow"
import GitHubStar from "../socialShare/gitHubStar"


const Hero = () => {
  return (
    <section
      style={{
        background: `#1c1e21 url(${lineSvg}) center center fixed`,
      }}
      className={`hero__container ${heroStyles.homePageHero}`}
    >
      <div className={heroStyles.wrap}>
        <div className={heroStyles.connect}>
            <TwitterFollow />
            <GitHubStar />
        </div>
        <div className={heroStyles.heroContent}>
          <h1 className={heroStyles.title}>Dev Articles for the Self-Starters</h1>
          <p className={heroStyles.description}>
          No fluff or technical jargons! Just practical guides that work.
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
            <p> Want to learn ReactJS? Get our <strong style={{ color: "#ff7c3c" }}>FREE</strong> book and start building awesome projects:
            </p>
            <div className="home__subscribe">
              <Subscribe customClass="" placeholder="Enter email to receive it" />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero
