import React from "react"
import SubHeading from "./subHeading"
import aboutStyles from "./aboutExcerpt.module.scss"

const AboutExcerpt = () => {
  return (
    <section className={`bg_dtl ${aboutStyles.about_excerpt}`}>
      <div className={aboutStyles.inner}>
        <div className={aboutStyles.aboutPosts}>
          <SubHeading title="How Ibaslogic can help you grow your dev knowledge!" />
          <p>
            This site documents all of my journey as a developer. My learnings, mistakes, tricks and logic are detailed through easy to follow articles and guides. This way, you have a proven path to follow. Thus, learning dev topics in a much quicker way. And that is the end goal!
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutExcerpt
