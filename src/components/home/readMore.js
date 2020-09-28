import React from "react"
import { Link } from "gatsby"

const ReadMore = props => {
  return (
    <Link className={props.btnPry} to={props.linkTo}>
      {props.text} {props.icon}
    </Link>
  )
}

export default ReadMore
