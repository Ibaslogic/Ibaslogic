import React from "react"
import aboutHeroStyles from "./about.module.scss"
// import authorImage from "../../images/ibas.png"

const AboutHero = () => {
  return (
    <section className={aboutHeroStyles.aboutHero}>
      <div
        className={`${aboutHeroStyles.contentWrapper} ${aboutHeroStyles.wrapper}`}
      >
        <div className={aboutHeroStyles.bannerContent}>
          <h1>
            {/* Want to build a modern <span className={aboutHeroStyles.nl}></span>{" "}
            web project? */}
            Do you want to learn the latest web tools and tech?
          </h1>
          <p className={aboutHeroStyles.description}>
            Then you're in the right place. Here, you will learn how to apply
            the tools and the strategy needed for your next project.
          </p>
        </div>
        <div className={aboutHeroStyles.imageContent}>
          {/* <img src={authorImage} alt="Ibas Majid" /> */}
        </div>
      </div>
    </section>
  )
}

export default AboutHero
