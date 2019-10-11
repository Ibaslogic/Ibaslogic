import React from "react"
import aboutHeroStyles from "./about.module.scss"
import authorImage from "../../images/ibas.png"

const AboutHero = () => {
  return (
    <section className={aboutHeroStyles.aboutHero}>
      <div
        className={`${aboutHeroStyles.contentWrapper} ${aboutHeroStyles.wrapper}`}
      >
        <div className={aboutHeroStyles.bannerContent}>
          <h1>
            Let's{" "}
            <span>
              help you <span class={aboutHeroStyles.nl}></span>improve{" "}
            </span>
            your Dev Knowledge
            {/* Find out how Ibaslogic will{" "}
            <span>
              {" "}
              help <span class={aboutHeroStyles.nl}></span> you improve
            </span>{" "}
            your Web Dev knowledge */}
          </h1>
          <p>
            If you want to build real-world web applications? Then, you've{" "}
            <span class={aboutHeroStyles.nl}></span>come to the right place.
          </p>
        </div>
        <div className={aboutHeroStyles.imageContent}>
          <img src={authorImage} alt="Ibas Majid" />
        </div>
      </div>
    </section>
  )
}

export default AboutHero
