import React from "react"
import aboutContentStyles from "./about.module.scss"
import topSection from "../../contents/aboutPage/topSection.json"
import secondSection from "../../contents/aboutPage/secondSection.json"
import thirdSection from "../../contents/aboutPage/thirdSection.json"
import Newsletter from "../newsletter/newsletter"
import Subscribe from "./subscribe"

const AboutContent = () => {
  return (
    <div className={aboutContentStyles.about}>
      <div className={aboutContentStyles.inner}>
        <div className={aboutContentStyles.content}>
          <div className={aboutContentStyles.section}>
            <h1 className={aboutContentStyles.heading}>New here? What Ibaslogic is all about</h1>
            {topSection.map(({ content }) => (
              <p key={content} dangerouslySetInnerHTML={{ __html: content }}></p>
            ))}
          </div>
          <div className={aboutContentStyles.section}>
            <h2 className={aboutContentStyles.subHeading}>Open Source</h2>
            {secondSection.map(({ content }) => (
              <p key={content} dangerouslySetInnerHTML={{ __html: content }}></p>
            ))}
          </div>
          <div className={aboutContentStyles.section}>
            <h2 className={aboutContentStyles.subHeading}>Who is Ibas?</h2>
            {thirdSection.map(({ content }) => (
              <p key={content} dangerouslySetInnerHTML={{ __html: content }}></p>
            ))}
          </div>
          <div className={aboutContentStyles.section}>
            <Newsletter />
          </div>
        </div>
        <div className={aboutContentStyles.aside}>
          <Subscribe />
        </div>
      </div>
    </div>
  )
}

export default AboutContent
