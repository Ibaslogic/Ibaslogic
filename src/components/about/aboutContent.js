import React from "react"
import aboutContentStyles from "./about.module.scss"
import SubHeading from "../home/subHeading"
import SubscribeSection from "./subscribeSection"

const AboutContent = () => {
  return (
    <section className={aboutContentStyles.about}>
      <div
        className={`${aboutContentStyles.content} ${aboutContentStyles.wrapper}`}
      >
        <div className={aboutContentStyles.headingWrap}>
          <SubHeading title="About Ibaslogic" />
        </div>

        <div className={aboutContentStyles.staticContent}>
          <p>
            If you are wondering where to learn WordPress, you've come to the
            right place. I am testing....
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
      <SubscribeSection />
      <div
        className={`${aboutContentStyles.content} ${aboutContentStyles.wrapper}`}
      >
        <div className={aboutContentStyles.headingWrap}>
          <SubHeading title="Who is Ibas?" />
        </div>
        <div className={aboutContentStyles.staticContent}>
          <p>
            <b>Ibas Majid</b> is a front-end developer and a creative writer. He
            specializes in developing realistic websites and web applications
            using the latest tools and tech. He also writes technical contents
            surrounding this subject.
          </p>
          <p>
            Ibas currently teaches JavaScript, React and WordPress theme
            development. And he has helped companies of different sizes launch
            their production websites/apps. He has a Computer Engineering degree
            from the University of Lagos, and he has been programming for about
            9 years. Aside from web development, he loves to play football.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutContent
