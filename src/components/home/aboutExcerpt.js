import React from "react"
import SubHeading from "./subHeading"
import { Link } from "gatsby"
import recentStyles from "./recentPosts.module.scss"
import aboutStyles from "./aboutExcerpt.module.scss"

const AboutExcerpt = () => {
  return (
    <section className={aboutStyles.aboutPosts}>
      <div
        className={`${recentStyles.subStyles} ${aboutStyles.subStylesExcerpt}`}
      >
        <div className={recentStyles.titleStyles}>
          <SubHeading title="A little about Ibaslogic" />
        </div>
        <div className={recentStyles.viewAll}>
          <Link to="/about">Read more</Link>
        </div>
      </div>

      <div className={aboutStyles.aboutExcerpt}>
        <div className={aboutStyles.colLeft}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aut
            quam molestias magni placeat at excepturi culpa optio assumenda
            dolorem.
          </p>
        </div>
        <div className={aboutStyles.colRight}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            reiciendis, ratione repudiandae nam ipsa quod. Non commodi minima
            ipsa qui!
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutExcerpt
