import React from "react"
import styles from "./newsletter.module.scss"
import Subscribe from "../subscribe/subscribe"

const Newsletter = props => {
  return (
    <div
      className={`sign__up ${styles.signUp}`}
    >
      <div className={styles.content}>
        <div className={`bg_dtd ${styles.headingContent}`}>
          <h3 className={styles.title}>
            Get ReactJS Book
          </h3>
          <p className={styles.description}>
            Valued at $14.99. But yours is completely <span style={{ fontWeight: 700 }}>free!</span>
          </p>
        </div>

        <div className={`bg_dtl post__subscribe ${styles.subscribe}`}>
          <Subscribe submitText="claim it now!" />
          <div className={`get_inTouch ${styles.getInTouch}`}>
            <p>Not into email list?</p>{" "}
            <span>
              <a
                href={`https://twitter.com/${props.socialhandle}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow me on Twitter
                </a>
            </span>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Newsletter