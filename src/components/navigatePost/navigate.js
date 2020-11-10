import React from "react"
import { Link } from "gatsby"

import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

import styles from "./navigate.module.scss"

const NavigatePosts = ({ prev, next }) => {
  console.log(prev, next)
  return (
    <div className={`bg_dm ${styles.navigatePosts}`}>
      {prev && (
        <Link to={`/${prev.url}/`} title={prev.title}>
          <span className={styles.arrow}>
            <FaArrowLeft />
          </span>
          <span className={styles.previous}>Previous</span>
        </Link>
      )}
      {next && (
        <Link to={`/${next.url}/`} title={next.title}>
          <span className={styles.next}>Next</span>
          <span className={styles.arrow}>
            <FaArrowRight />
          </span>
        </Link>
      )}
    </div>
  )
}
export default NavigatePosts
