import React from "react"
import aboutContentStyles from "./about.module.scss"
import SubHeading from "../home/subHeading"
import { Link } from "gatsby"
// import SubscribeSection from "./subscribeSection"

const AboutContent = () => {
  return (
    <section className={aboutContentStyles.about}>
      <div
        className={`${aboutContentStyles.content} ${aboutContentStyles.wrapper}`}
      >
        <div className={aboutContentStyles.mainContentWrapper}>
          <div className={aboutContentStyles.mainContent}>
            <div className={aboutContentStyles.headingWrap}>
              <SubHeading title="How Ibaslogic Will Help Your Dev Knowledge" />
            </div>

            <div className={aboutContentStyles.staticContent}>
              <p>
                Are you finding it hard to complete a real-world web project?{" "}
              </p>
              <p>Most beginners do!</p>
              <p>
                They learn web languages/technologies in isolation without
                having a deeper understanding to apply the knowledge and
                complete a project.
              </p>
              <p>
                I learned this the hard way. So don’t get trapped in the common
                pitfalls. Instead, you should
                <strong> start learning in a project-based method</strong>.
              </p>
              <p>And that is where Ibaslogic comes in.</p>
              <p>
                Through easy to follow guides, you’ll learn how to connect the
                dots (web technologies) and complete a real-world web
                application.
              </p>
              <p>
                This way, you will easily see how the dev topics are connected
                to form a solution. Thus, appreciating what you are learning and
                of course, retaining the knowledge easily.
              </p>
              <p>This has proven to work best!</p>
              <p>
                So stick around as you take your dev knowledge to another level.
              </p>
              <p>
                Oh, while you are here, make sure you get my free React Book and
                start building awesome projects.
              </p>
              <p>
                Also, I advise you to take a look at these practical guides for
                a quick start:
              </p>
              <h3>Practical Guides to Help You Get Started:</h3>
              <ul>
                <li>
                  <Link
                    to="/blog/react-tutorial-for-beginners/"
                    title="React tutorial"
                  >
                    A Step-by-Step Guide to Learning React JS in 2020
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    to="/blog/gatsby-tutorial-from-scratch-for-beginners/"
                    title="Gatsby tutorial"
                  >
                    Gatsby Tutorial: A Step-by-Step Guide to Building a Gatsby
                    Site from Scratch
                  </Link>{" "}
                </li>
              </ul>
              <p>
                Once you have the basic knowledge of React and Gatsby, you can
                then take a look at{" "}
                <a
                  href="https://github.com/ibaslogic/Ibaslogic"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open source project"
                >
                  my site source code on GitHub
                </a>
                . It’s open-sourced for use and modifications.
              </p>
            </div>

            <div className={aboutContentStyles.headingWrap}>
              <SubHeading title="Who is Ibas?" />
            </div>
            <div className={aboutContentStyles.staticContent}>
              <p>
                Ibaslogic was designed and developed by Ibas Majid, a
                self-taught web developer and a writer.
              </p>
              <p>
                Before building this site with Gatsby, Ibas did not know the
                requisite tech to complete this project – i.e React, GraphQL,
                NodeJS and of course GatsbyJS.
              </p>
              <p>
                He had little knowledge of JavaScript which is also a
                prerequisite. Back then, he was working majorly on WordPress
                sites.
              </p>
              <p>
                His love for Gatsby fast-tracked his dev journey because it
                served as a turning point for him to learn the “real” web dev.
                And in no distant time, through project-based learning, he
                acquired enough knowledge on the subject.
              </p>
              <p>
                Now, Ibas teaches JavaScript, React, Gatsby and WordPress theme
                development. And he has helped companies of different sizes
                launch their production websites/apps.
              </p>
              <p>
                In this blog, Ibas will be sharing with you all the dev
                knowledge and strategy he acquired thus far. So make sure you
                sign up for free updates and follow Ibas around the web.
              </p>
              <p>
                <strong>
                  <em>
                    <a
                      href="https://twitter.com/ibaslogic"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Follow me on Twitter"
                    >
                      Connect with Ibas on Twitter
                    </a>
                  </em>
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContent
