import React, { useState, useEffect } from "react"

import { FaChevronUp } from "react-icons/fa"
import { Link } from "react-scroll"

import shareStyles from "../../templates/blogpage.module.scss"

const ScrollTop = () => {
  const [showScrollTop, useshowScrollTop] = useState(false)

  const onScroll = () => {
    if (window.pageYOffset > 3000) {
      useshowScrollTop(true)
      // this.setState({
      //   showSocialShare: true,
      // })
    } else {
      useshowScrollTop(false)
      // this.setState({
      //   showSocialShare: false,
      // })
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
  }, [])

  // componentDidMount() {
  //   window.addEventListener("scroll", this.onScroll)
  // }

  return (
    <Link
      //activeClass="active"
      to="primary"
      //spy={true}
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
