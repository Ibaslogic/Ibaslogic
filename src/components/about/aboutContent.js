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
            If you have ever wondered – "How can I learn and apply the latest
            web technologies to build a real-world project?". You have come to
            the right place.
          </p>
          <p>
            I know how it feels to learn different technologies in isolation
            without having a deeper understanding of how to apply the knowledge to
            build a modern project.
          </p>
          <p>I learned this the hard way.</p>
          <p>So you shouldn’t follow the same route.</p>
          <p>
            Instead, in this blog, I will show you the best way to learn web
            development – The project-based learning method. This has proven to
            work tremendously for my students.
          </p>
          <p>You will be able to learn web development in no distant time.</p>
          <p>So stick around as we both learn together! </p>
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
            <strong>Ibas Majid</strong> is a web developer, teacher and a
            creative writer. He specializes in developing realistic websites and
            web applications using the latest tools and tech. He also writes
            technical contents around this subject.
          </p>
          <p>
            He authored{" "}
            <em>
              <u>
                <a
                  href="https://www.amazon.com/React-Beginner-Developers-step-step/dp/1704461618/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1576879707&sr=8-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Easy React JS for Beginner Developers
                </a>
              </u>
            </em>{" "}
            and some other books which are available on Amazon.
          </p>
          <p>
            Ibas currently teaches JavaScript, React, Gatsby and WordPress theme
            development. And he has helped companies of different sizes launch
            their production websites/apps. He has a Computer Engineering degree
            from the University of Lagos, and he has been programming for about
            9 years.
          </p>
          <p>
            In this blog, he will be sharing with you all the dev knowledge he
            acquired thus far. You will also learn all the simple logic to
            easily grasp web technologies.
          </p>
          <p>
            While you’re here, make sure you sign up for free updates to learn
            all the tips and tricks that will boost your web development
            knowledge.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutContent
