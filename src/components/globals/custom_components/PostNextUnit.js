import React from "react"
import { Link } from "gatsby"
import { FaAngleRight } from "react-icons/fa"

const PostNextUnit = props => {
  return (
    <div className="post__next__unit">
      <h2 className="next__heading">{props.heading}</h2>
      <p><Link className="btn__link" to={props.url}>{props.btnLabel} <span><FaAngleRight /></span></Link></p>
    </div>
  )
}

export default PostNextUnit
