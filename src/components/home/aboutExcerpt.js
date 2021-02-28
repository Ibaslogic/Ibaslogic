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
            Reading dev topics or programming, in general, is not enough to become a better developer. You need to normalize putting that learning into practice. This blog is where I show the tricks and logic that works for me. I’m sure it will work for you too.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutExcerpt
