import React from "react"
import { Link } from "gatsby"
import styles from "./filterPosts.module.scss"

const FilterPosts = ({
  categories,
  handleItems,
  selectedItem,
}) => {
  return (
    <div className={`bg_dtl hover_white ${styles.filterContainer}`}>
      <div className={styles.filter}>
        {categories.map((category, index) => {
          return (
            <button
              className={selectedItem === category ? `selected ${styles.selected}` : ""}
              type="button"
              key={index}
              onClick={() => handleItems(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
      <div className={styles.articles}>
        <Link to="/articles/">
          <button>more</button>
        </Link>
      </div>
    </div>
  )
}
export default FilterPosts
