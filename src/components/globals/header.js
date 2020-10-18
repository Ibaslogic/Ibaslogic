import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import useDarkMode from "use-dark-mode"
import logo from "../../images/ibaslogic__site__logo_v3.5.png"
import { FaMoon, FaGithub, FaTwitter } from "react-icons/fa"
import { TiAdjustBrightness } from "react-icons/ti"
// header styles
import headerStyles from "./header.module.scss"
import Helmet from "react-helmet"

const Header = () => {
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
    <header className={`sticky_inner bg_dm ${headerStyles.container}`}>
      <Helmet>
        <html className={navbarOpen ? `${headerStyles.noScroll}` : ``} />
      </Helmet>
      <div className={headerStyles.headerContentWrap}>     
        <div className={headerStyles.brandContainer}>
          <div className={headerStyles.brand}>
            <Link to="/" className={headerStyles.brandLink}>
              <img src={logo} alt="ibaslogic logo" title="site logo" />
            </Link>
          </div>
          <button
            className={`${headerStyles.menuBtn} ${
              navbarOpen ? headerStyles.isOpened : ""
            }`}
            onClick={handleToggle}
          >
            <div className={headerStyles.btnLine}></div>
            <div className={headerStyles.btnLine}></div>
            <div className={headerStyles.btnLine}></div>
          </button>   
        </div>
        <nav className={`${headerStyles.navbar}`}>        
          <ul // add show
            className={`bg_dm ${navbarOpen
              ? `${headerStyles.menuNav} ${headerStyles.showMenu}`
              : `${headerStyles.menuNav}`}`         
            }
          >
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
        <div className={headerStyles.spacer}></div>
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
    </header>
  )
}

export default Header
