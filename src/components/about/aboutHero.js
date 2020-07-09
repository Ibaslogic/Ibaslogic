import React from "react"
import aboutHeroStyles from "./about.module.scss"
import Subscribe from "../subscribe/subscribe"
// import authorImage from "../../images/ibas.png"

const AboutHero = () => {
  return (
    <section className={`about__hero ${aboutHeroStyles.aboutHero}`}>
      <div
        className={`${aboutHeroStyles.contentWrapper} ${aboutHeroStyles.wrapper}`}
      >
        <div className={aboutHeroStyles.bannerContent}>
          <h1>New here? Here is how I can help!</h1>
          <p className={aboutHeroStyles.description}>
            I will show you how to easily grasp web languages, tools and
            strategy needed to complete a real-world project.
          </p>
        </div>
        <div
          className={`subscribe__content ${aboutHeroStyles.subscribeContent}`}
        >
          <div className={aboutHeroStyles.formContent}>
            <p className={aboutHeroStyles.description}>
              Get my ReactJS Book for FREE (Worth $14.99) and start building web
              projects you’d be happy to share.
            </p>
          </div>
          <div className="about__subscribe">
            <Subscribe submitText="Yes, I want" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
