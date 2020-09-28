import React, { useState, useEffect, useRef } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import useDarkMode from "use-dark-mode"
import logo from "../../images/ibaslogic__site__logo_v3.5.png"
import { FaMoon, FaGithub, FaTwitter } from "react-icons/fa"
import { TiAdjustBrightness } from "react-icons/ti"

// header styles
import headerStyles from "./header.module.scss"
import Helmet from "react-helmet"

const Header = () => {
  const node = useRef()
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [links] = useState([
    {
      id: 1,
      path: "/blog/",
      text: "tutorial",
    },
    {
      id: 2,
      path: "/contact/",
      text: "contact",
    },
    {
      id: 3,
      path: "/about/",
      text: "about",
    },
  ])

  const handleToggle = () => {
    setNavbarOpen(prev => !navbarOpen)
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

  const darkMode = useDarkMode(false)

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitterHandle
          github
        }
      }
    }
  `)

  return (
    <header className={`top__header ${headerStyles.container}`}>
      <Helmet>
        <html className={navbarOpen ? `${headerStyles.noScroll}` : ``} />
      </Helmet>
      <div className={headerStyles.headerContentWrap}>
        <div className={headerStyles.contentLeft}>
          <div className={headerStyles.content}>
            <div className={headerStyles.brand}>
              <Link to="/" className={headerStyles.brandLink}>
                <img src={logo} alt="ibaslogic logo" title="site logo" />
              </Link>
            </div>

            <nav ref={node} className={`${headerStyles.navbar}`}>
              <button
                className={`menu__btn ${headerStyles.menuBtn}`}
                onClick={handleToggle}
              >
                <div className={headerStyles.btnLine}></div>
                <div className={headerStyles.btnLine}></div>
                <div className={headerStyles.btnLine}></div>
              </button>
              <ul // add show
                className={
                  navbarOpen
                    ? `menu__nav ${headerStyles.menuNav} ${headerStyles.showNav}`
                    : `menu__nav ${headerStyles.menuNav}`
                }
              >
                <div className={headerStyles.closeBtn}>
                  <button className={headerStyles.close} onClick={handleToggle}>
                    <div className={headerStyles.btnLine}></div>
                    <div className={headerStyles.btnLine}></div>
                  </button>
                </div>

                {links.map(link => {
                  return (
                    <li key={link.id} className={headerStyles.navItem}>
                      <Link
                        to={link.path}
                        className={`nav__link ${headerStyles.navLink}`}
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
        </div>

        <div className={`content__right ${headerStyles.contentRight}`}>
          <a
            href={`https://github.com/${data.site.siteMetadata.github}`}
            target="_blank"
            title="Open-source project"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href={`https://twitter.com/${data.site.siteMetadata.twitterHandle}`}
            target="_blank"
            title="Connect on Twitter"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>

          <button
            className={`darkLight__link ${headerStyles.darkLight}`}
            onClick={darkMode.toggle}
            title="Switch theme mode"
          >
            <div
              className={`${headerStyles.themeMode} ${
                darkMode.value ? headerStyles.sun : headerStyles.moon
              }`}
            >
              {darkMode.value ? <TiAdjustBrightness /> : <FaMoon />}
            </div>
          </button>
        </div>
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
