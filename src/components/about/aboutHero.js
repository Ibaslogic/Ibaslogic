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
            Find out how Ibaslogic will <span class={aboutHeroStyles.nl}></span>
            <span>help you improve</span> your Dev knowledge
          </h1>
          <p>Together we will build real-world web applications.</p>
        </div>
        <div className={aboutHeroStyles.imageContent}>
          <img src={authorImage} alt="Ibas Majid" />
        </div>
      </div>
    </section>
  )
}

export default AboutHero
