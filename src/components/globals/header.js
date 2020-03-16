import React, { useState, useEffect, useRef } from "react"

import { Link } from "gatsby"
//import logo from "../../images/ibaslogic_logo.svg"
import logo from "../../images/ibaslogic_logo.png"
// header styles
import headerStyles from "./header.module.scss"
import Helmet from "react-helmet"

const Header = () => {
  const node = useRef()
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [links] = useState([
    {
      id: 1,
      path: "/",
      text: "home",
    },
    {
      id: 2,
      path: "/blog/",
      text: "blog",
    },
    {
      id: 3,
      path: "/contact/",
      text: "contact",
    },
    {
      id: 4,
      path: "/about/",
      text: "about",
    },
  ])

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return
    }
    setNavbarOpen(false)
  }

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick) // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  return (
    <header className={headerStyles.container}>
      <Helmet>
        <body className={navbarOpen ? `${headerStyles.noScroll}` : ``} />
      </Helmet>
      <div className={headerStyles.content}>
        <div className={headerStyles.brand}>
          <Link to="/" className={headerStyles.brandLink}>
            <img src={logo} alt="ibaslogic logo" />
          </Link>
        </div>

        <nav ref={node} className={`${headerStyles.navbar}`}>
          <div
            className={
              navbarOpen
                ? `${headerStyles.menuBtn} ${headerStyles.close}`
                : `${headerStyles.menuBtn}`
            } // add close class
            onClick={handleToggle}
          >
            <div className={headerStyles.btnLine}></div>
            <div className={headerStyles.btnLine}></div>
            <div className={headerStyles.btnLine}></div>
          </div>
          <ul // add show
            className={
              navbarOpen
                ? `${headerStyles.menuNav} ${headerStyles.showNav}`
                : `${headerStyles.menuNav}`
            }
          >
            {links.map(link => {
              return (
                <li key={link.id} className={headerStyles.navItem}>
                  <Link
                    to={link.path}
                    className={headerStyles.navLink}
                    activeClassName={headerStyles.activeNavItem}
                  >
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      <div
        className={
          navbarOpen
            ? `${headerStyles.sidebarOverlay} ${headerStyles.showOverlay}`
            : `${headerStyles.sidebarOverlay}`
        }
      ></div>
    </header>
  )
}

export default Header
