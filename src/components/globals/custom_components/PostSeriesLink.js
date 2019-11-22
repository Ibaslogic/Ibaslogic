import React from "react"
import { Link } from "gatsby"

const PostSeriesLink = props => {
  return (
    <div className="series-link-container">
      <p>{props.label}</p>
      {/* {console.log(props.datas)} */}
      <ul>
        {props.datas.map((data, index) => (
          <li key={index}>
            {data.prefix}
            {" –  "}
            <Link to={data.url}>{data.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostSeriesLink
