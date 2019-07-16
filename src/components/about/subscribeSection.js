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
        <Subscribe />
      </div>
    </section>
  )
}

export default SubscribeSection
