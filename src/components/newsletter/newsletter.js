import React from "react"
import styles from "./newsletter.module.scss"
import Subscribe from "../subscribe/subscribe"

const Newsletter = () => {
  return (
    <div
      className={styles.signUp}
    >
      <div className={`bg_dtl ${styles.content}`}>
        <p className={styles.heading}>Get our ReactJS book (valued at $14.99) for free!</p>
        <div className="post__subscribe">
          <Subscribe submitText="Yes, I want!" />
        </div>
      </div>
    </div>

  )
}
export default Newsletter