import React from "react"
import Subscribe from "./subscribe"
import aboutContentStyles from "./about.module.scss"

const SubscribeSection = () => {
  return (
    <section className={aboutContentStyles.subscribe}>
      <div className={aboutContentStyles.imageFilter}></div>
      <div
        className={`${aboutContentStyles.subscibeContent} ${aboutContentStyles.wrapper}`}
      >
        <Subscribe
          heading="Stay in the Loop"
          subHeading="You'll be the first to know about the latest web development tips"
          submitText="Sign me up!"
        />
      </div>
    </section>
  )
}

export default SubscribeSection
