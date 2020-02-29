import React from "react"
import aboutHeroStyles from "./about.module.scss"
// import authorImage from "../../images/ibas.png"
// import Subscribe from "./subscribe"

const AboutHero = () => {
  return (
    <section className={aboutHeroStyles.aboutHero}>
      <div
        className={`${aboutHeroStyles.contentWrapper} ${aboutHeroStyles.wrapper}`}
      >
        <div className={aboutHeroStyles.bannerContent}>
          <h1>
            Want to build a modern <span class={aboutHeroStyles.nl}></span> web
            project?
            {/* <span>help you improve </span>
            your <span class={aboutHeroStyles.nl}></span> Dev Knowledge */}
          </h1>
          <h3 className={aboutHeroStyles.description}>
            Then you're in the right place. You will get to learn how to apply
            the tools <span class={aboutHeroStyles.nl}></span>and the strategy
            needed for your next project.
            {/* Enter your email below to get access to my web development
            (practical)<span class={aboutHeroStyles.nl}></span> tips and tricks. */}
          </h3>
          {/* <Subscribe heading="" subHeading="" submitText="Sign up" /> */}
        </div>
        <div className={aboutHeroStyles.imageContent}>
          {/* <img src={authorImage} alt="Ibas Majid" /> */}
        </div>
      </div>
    </section>
  )
}

export default AboutHero
