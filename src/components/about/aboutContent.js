import React from "react"
import { Link } from "gatsby"
import aboutContentStyles from "./about.module.scss"
import Subscribe from "../subscribe/subscribe"
import aboutIbaslogic from "../../contents/aboutPage/aboutIbaslogic.json"
import aboutIbas from "../../contents/aboutPage/aboutMe.json"

const AboutContent = () => {
  return (
    <>
      <section
        className={`sectionWrapper ${aboutContentStyles.section} ${aboutContentStyles.ibaslogic}`}
      >
        <div className={aboutContentStyles.inner}>
          {aboutIbaslogic.map(({ subHeading, content }) => (
            <div className={aboutContentStyles.content} key={subHeading}>
              <h2
                className={aboutContentStyles.heading}
                dangerouslySetInnerHTML={{ __html: subHeading }}
              ></h2>
              <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
          ))}
        </div>
      </section>
      <section
        className={`sectionWrapper ${aboutContentStyles.section} ${aboutContentStyles.newsletter}`}
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
            <div className={aboutContentStyles.content} key={subHeading}>
              <h2
                className={aboutContentStyles.heading}
                dangerouslySetInnerHTML={{ __html: subHeading }}
              ></h2>
              <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
          ))}
          <div>
            Go ahead and <Link to="/contact/">send a message</Link> or connect
            with{" "}
            <a
              href="https://twitter.com/ibaslogic"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow me on Twitter"
            >
              Ibas on Twitter
            </a>
            .
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutContent
