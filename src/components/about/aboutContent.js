import React from "react"
import aboutContentStyles from "./about.module.scss"
import Subscribe from "../subscribe/subscribe"
import aboutIbaslogic from "../../contents/aboutPage/aboutIbaslogic.json"
import aboutIbas from "../../contents/aboutPage/aboutMe.json"

const AboutContent = () => {
  return (
    <div className={aboutContentStyles.about}>
      <section
        className={`sectionWrapper ${aboutContentStyles.section} ${aboutContentStyles.ibaslogic}`}
      >
        <div className={aboutContentStyles.inner}>
          {aboutIbaslogic.map(({ heading, content }) => (
            <div className={aboutContentStyles.content} key={content}>
              <h1
                className={aboutContentStyles.heading}
                dangerouslySetInnerHTML={{ __html: heading }}
              ></h1>
              <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
          ))}
        </div>
      </section>
      <section
        className={`sectionWrapper bg_dtl ${aboutContentStyles.section} ${aboutContentStyles.newsletter}`}
      >
        <div className={aboutContentStyles.inner}>
          <div className={aboutContentStyles.newsletterContent}>
            <div className={aboutContentStyles.formHeading}>
              <h3>Want to learn react?</h3>
              <p className={aboutContentStyles.description}>
                Get Book (valued at $14.99) for FREE and start building web
                projects you’d be happy to share.
              </p>
            </div>
            <div className={`about__subscribe ${aboutContentStyles.subscribe}`}>
              <Subscribe submitText="Yes, I want" />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`sectionWrapper ${aboutContentStyles.section} ${aboutContentStyles.ibas}`}
      >
        <div className={aboutContentStyles.inner}>
          {aboutIbas.map(({ subHeading, content }) => (
            <div className={aboutContentStyles.content} key={content}>
              <h2
                className={aboutContentStyles.subHeading}
                dangerouslySetInnerHTML={{ __html: subHeading }}
              ></h2>
              <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutContent
