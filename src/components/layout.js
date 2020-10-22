/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */


import React, { useEffect, useRef, useState } from 'react';
import PropTypes from "prop-types"

import "../styles/index.scss"

import layoutStyles from "./layout.module.scss"

//import child components
import Header from "./globals/header"
import Footer from "./globals/footer"
import TopBar from "./globals/topBar"

const Layout = ({ children }) => {

  // top nav bar sticky
  const [isSticky, setSticky] = useState(false)
  const ref = useRef(null)

  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    }
  }, [])

  return (
    <div className={layoutStyles.container}> 
      <div className={layoutStyles.content}>
        <TopBar />
        <div className={`${layoutStyles.stickyWrapper} sticky_wrapper${isSticky ? ' sticky' : ''}`} ref= {ref}>
        <Header />
        </div>
       
        <div className={layoutStyles.mainContent}>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
