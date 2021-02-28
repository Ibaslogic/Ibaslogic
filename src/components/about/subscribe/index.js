import React from 'react'
import styles from "./subscribe.module.scss"
import author from "../../../images/ibas2.png"

const Subscribe = () => {
  return (
    <div className={`bg_dtl ${styles.wrapper}`}>
      <img className={styles.image} src={author} alt=""/>
      <p className={styles.info}>
          Ibas Majid <br/>
          <span>ibas@ibaslogic.com</span>
          <span>+234 81 3954 23 86</span>
        </p>
      <div className={styles.content}>
        <p>Get exclusive dev tips that I only share with Email Subscribers? <a href='https://ibaslogic.substack.com/' target='_blank' rel='noopener noreferrer' title='Subscribe to Newsletter'>Click here to join the newsletter</a>.</p>
      </div>
    </div>
  )
}
export default Subscribe
