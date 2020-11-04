/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */


import React from 'react';
import PropTypes from "prop-types"

import "../styles/index.scss"

import layoutStyles from "./layout.module.scss"

//import child components
import Header from "./globals/header"
import Footer from "./globals/footer"

const Layout = ({ children }) => {

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
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
