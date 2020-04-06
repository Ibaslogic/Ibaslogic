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
            Do you want to learn the latest{" "}
            <span className={aboutHeroStyles.nl}></span> web technologies?
          </h1>
          <h3 className={aboutHeroStyles.description}>
            Then you're in the right place. Here, you will learn how to apply
            the tools <span className={aboutHeroStyles.nl}></span>and the
            strategy needed for your next project.
          </h3>
        </div>
        <div className={aboutHeroStyles.imageContent}>
          {/* <img src={authorImage} alt="Ibas Majid" /> */}
        </div>
      </div>
    </section>
  )
}

export default AboutHero
