import React from "react"
import { Link } from "gatsby"

const TableOfContents = ({ items, slug }) => {
  return (
    <div className="table-content-container">
      <ul>
        {items.map(item => (
          <li>
            <Link to={"/blog/" + slug + "/" + item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TableOfContents
