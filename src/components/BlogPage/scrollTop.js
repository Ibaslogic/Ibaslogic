import React from "react"

import { FaChevronUp } from "react-icons/fa"
import { Link } from "react-scroll"

import shareStyles from "../../templates/blogpage.module.scss"

const ScrollTop = () => {
  return (
    <Link
      //activeClass="active"
      to="primary"
      //spy={true}
      smooth={true}
      offset={-64}
      duration={500}
      className={shareStyles.scrollTop}
    >
      <FaChevronUp /> Back to top
    </Link>
  )
}

export default ScrollTop
