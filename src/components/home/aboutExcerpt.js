import React from "react"
import SubHeading from "./subHeading"
import aboutStyles from "./aboutExcerpt.module.scss"
import ReadMore from "./readMore"
import { FaExternalLinkAlt } from "react-icons/fa"

const AboutExcerpt = () => {
  return (
    <section className={`about_excerpt ${aboutStyles.about_excerpt}`}>
      <div className={aboutStyles.inner}>
        <div className={aboutStyles.aboutPosts}>
          <SubHeading title="How Ibaslogic can help you grow your dev knowledge!" />
          <p>
            Often, beginner developers learn web languages without having a
            sound knowledge to build a real-world project. To avoid this
            pitfall, here, you will start learning dev topics in a project-based
            method. Through, easy to follow guides, you will learn to connect
            the dots and complete a project.
          </p>
          <div className={aboutStyles.viewAll}>
            <ReadMore
              linkTo="/about/"
              text="Click to Read More"
              icon={<FaExternalLinkAlt />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutExcerpt
