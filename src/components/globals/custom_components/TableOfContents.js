import React from "react"
import { Link } from "gatsby"

const TableOfContents = ({ items, slug }) => {
  return (
    <div className="table-content-container">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={"/" + slug + "/" + item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TableOfContents
