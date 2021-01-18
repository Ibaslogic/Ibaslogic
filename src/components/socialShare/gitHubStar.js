import React from "react"
import { BiStar } from "react-icons/bi"

import styles from "./shareItems.module.scss"

const GitHubStar = () => {
  return (
    <a
      class={styles.gitHubStarBtn}
      href="https://github.com/Ibaslogic/Ibaslogic"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="Star Ibaslogic Porject on GitHub"
    >
      <span>
        <BiStar />
      </span>
      <span>Star on Github</span>
    </a>
  )
}

export default GitHubStar
