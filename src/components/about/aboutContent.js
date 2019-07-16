import React from "react"
import aboutContentStyles from "./about.module.scss"
import SubHeading from "../home/subHeading"

const AboutContent = () => {
  return (
    <section className={aboutContentStyles.about}>
      <div
        className={`${aboutContentStyles.content} ${aboutContentStyles.wrapper}`}
      >
        <SubHeading title="About Ibaslogic" />
        <div className={aboutContentStyles.staticContent}>
          <p>
            If you are wondering where to learn WordPress, you've come to the
            right place.
          </p>
          <p>
            In this blog, you will get to know the simple logic behind WordPress
            solutions.
          </p>
          <p>
            May be you want to develop WordPress site; fix WordPress error or
            any other WordPress related subject. This blog got you covered.
          </p>
          <p>
            Ibaslogic came to existence to help WordPress users simplify any
            technical subject because WordPress shouldn’t be too technical to
            use.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutContent
