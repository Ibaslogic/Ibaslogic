import React from "react"
import { Link } from "gatsby"
import { slugify } from "../../../util/utilityFunction"

import styles from "./seriesTagLinks.module.scss"

const SeriesTagLinks = ({ tags }) => {
  return (
    <div className={styles.tagLinks}>
      <ul className={styles.postTags}>
        {tags.map((tag, index) => (
          <li key={index}>
            {tag === "javascript" ? (
              <Link
                style={{ backgroundColor: "#f4d001", color: "#000" }}
                to={`/tags/${slugify(tag)}/`}
              >
                <span>#</span>
                {tag}
              </Link>
            ) : tag === "gatsby" ? (
              <Link
                style={{ backgroundColor: "#653297", color: "#fff" }}
                to={`/tags/${slugify(tag)}/`}
              >
                <span>#</span>
                {tag}
              </Link>
            ) : tag === "basic" ? (
              <Link
                style={{ backgroundColor: "#035b21", color: "#fff" }}
                to={`/tags/${slugify(tag)}/`}
              >
                <span>#</span>
                {tag}
              </Link>
            ) : tag === "graphql" ? (
              <Link
                style={{ backgroundColor: "#ae0878", color: "#fff" }}
                to={`/tags/${slugify(tag)}/`}
              >
                <span>#</span>
                {tag}
              </Link>
            ) : tag === "react" ||
              tag === "reactjs" ||
              tag === "jsx" ? (
              <Link
                style={{
                  backgroundColor: "#222222",
                  color: "#61DAF6",
                }}
                to={`/tags/${slugify(tag)}/`}
              >
                <span>#</span>
                {tag}
              </Link>
            ) : (
              <Link
                style={{ backgroundColor: "#bfbfbf", color: "#000" }}
                to={`/tags/${slugify(tag)}/`}
              >
                <span>#</span>
                {tag}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default SeriesTagLinks





