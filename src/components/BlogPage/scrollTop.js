import React, { useState, useEffect } from "react"
import { FaChevronUp } from "react-icons/fa"
import { Link } from "react-scroll"
import shareStyles from "../../templates/blogpage.module.scss"

const ScrollTop = () => {
  const [showScrollTop, useshowScrollTop] = useState(false)

  const onScroll = () => {
    if (window.pageYOffset > 3000) {
      useshowScrollTop(true)
    } else {
      useshowScrollTop(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
  }, [])

  return (
    <Link
      to="primary"
      smooth={true}
      offset={-64}
      duration={500}
      className={showScrollTop ? `${shareStyles.scrollTop}` : ``}
    >
      <FaChevronUp /> Top
    </Link>
  )
}

export default ScrollTop
