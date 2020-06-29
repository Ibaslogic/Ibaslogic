import React from "react"
import SubHeading from "./subHeading"
import { Link } from "gatsby"
import recentStyles from "./recentPosts.module.scss"
import aboutStyles from "./aboutExcerpt.module.scss"
import { FaExternalLinkAlt } from "react-icons/fa"

const AboutExcerpt = () => {
  return (
    <section className={aboutStyles.container}>
      <div className={aboutStyles.aboutPosts}>
        <div
          className={`${recentStyles.subStyles} ${aboutStyles.subStylesExcerpt}`}
        >
          <div className={recentStyles.titleStyles}>
            <SubHeading title="How Ibaslogic can help you!" />
          </div>
          <div className={recentStyles.viewAll}>
            <Link to="/about/">
              Click to Read More <FaExternalLinkAlt />
            </Link>
          </div>
        </div>

        <div className={aboutStyles.aboutExcerpt}>
          <div className={aboutStyles.colLeft}>
            <p>
              Most beginner developers often learn web languages in isolation
              without having a deeper knowledge to{" "}
              <strong>connect the dots</strong> and complete a real-world
              project.
            </p>
          </div>
          <div className={aboutStyles.colRight}>
            <p>
              To avoid this scenario, you need to follow a proven path to
              learning web development.
            </p>
            <p>And that’s where Ibaslogic comes in. </p>
            <p>
              Through project-based learning, you will discover how to grasp all
              of these dev technologies in no distant time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutExcerpt
