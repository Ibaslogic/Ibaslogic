import React, { useState, useEffect } from "react"
import { FaChevronUp } from "react-icons/fa"
import { Link } from "react-scroll"
import shareStyles from "../../templates/blogpage.module.scss"

const ScrollTop = () => {
  const [showScrollTop, useshowScrollTop] = useState(false)

  // Detect mount and unmount
  useEffect(() => {
    let isMounted = true
    const onScroll = () => {
      if (isMounted) {
        if (window.pageYOffset > 3000) {
          useshowScrollTop(true)
        } else {
          useshowScrollTop(false)
        }
      }
    }
    window.addEventListener("scroll", onScroll)

    return () => {
      isMounted = false
    }
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
