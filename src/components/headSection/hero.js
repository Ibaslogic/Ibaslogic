import React from "react"
import { Link } from "react-scroll"
import heroStyles from "./headSection.module.scss"
import TwitterFollow from "../socialShare/twitterFollow"
import GitHubStar from "../socialShare/gitHubStar"
import { TiLocationArrow } from "react-icons/ti";


const Hero = () => {
  return (
    <section className={`hero__container ${heroStyles.homePageHero}`} >
      <div className={heroStyles.wrap}>
        <div className={heroStyles.connect}>
            <TwitterFollow />
            <GitHubStar />
        </div>
        <div className={heroStyles.heroContent}>
          <h1 className={heroStyles.title}>Dev Articles for the Self-Starters</h1>
          <p className={heroStyles.description}>
            No fluff! Just practical guides that work.
          </p>
          <p className={heroStyles.description}>
            Let's normalize putting our learning to practice.    
          </p>
          <div className={heroStyles.input_container}>
            <Link
              to="featured"
              className={`btn-primary ${heroStyles.btn_primary}`}
              smooth={true}
              offset={-64}
              duration={500}
            >
              get started
            </Link>
            <div className={heroStyles.newsletter}>
              <a href="https://ibaslogic.substack.com/" target="_blank" rel="noopener noreferrer" title="Sign up">Join Newsletter <TiLocationArrow /></a> 
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero
