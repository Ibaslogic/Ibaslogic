import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import useDarkMode from "use-dark-mode"
import logo from "../../images/logo_ibaslogic_v1.png"
import { FaMoon, FaGithub, FaTwitter } from "react-icons/fa"
import { TiAdjustBrightness } from "react-icons/ti"
import { MdClose } from "react-icons/md";
// header styles
import headerStyles from "./header.module.scss"
import Helmet from "react-helmet"
 
const Header = () => {
  const [scroll, setScroll] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [links] = useState([
    {
      id: 1,
      path: "/",
      text: "home"
    },
    {
      id: 2,
      path: "/blog/",
      text: "articles",
    },
    {
      id: 3,
      path: "/series/",
      text: "series",
    },
    {
      id: 4,
      path: "/contact/",
      text: "contact",
    },
    {
      id: 5,
      path: "/about/",
      text: "about",
    },
  ])

  const openDrawer = () => {
    setNavbarOpen(true)
  }

  const closeDrawer = () => {
    setNavbarOpen(false)
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

  // Detect on page scroll
  useEffect(() => {
    let isMounted = true
    const onScroll = () => {
      if (isMounted) {
        if (window.pageYOffset > 5) {
          setScroll(true)
        } else {
          setScroll(false)
        }
      }
    }
    window.addEventListener("scroll", onScroll)

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className={scroll ? headerStyles.scrolled : ""}>
      <header className={`bg_dm top_header ${headerStyles.container}`}>
        <Helmet>
          <html className={navbarOpen ? `${headerStyles.noScroll}` : ``} />
        </Helmet>
        <div className={`dm ${headerStyles.headerContentWrap}`}>
          <div className={headerStyles.brandContainer}>
            <div className={headerStyles.brand}>
              <Link to="/" className={headerStyles.brandLink}>
                <img src={logo} alt="ibaslogic logo" title="site logo" />
              </Link>
            </div>
            <button
              className={`${headerStyles.menuBtn} ${navbarOpen ? headerStyles.isOpened : ""
                }`}
              onClick={openDrawer}
            >
              <div className={`btn_line ${headerStyles.btnLine}`}></div>
              <div className={`btn_line ${headerStyles.btnLine}`}></div>
              <div className={`btn_line ${headerStyles.btnLine}`}></div>
            </button>
          </div>
          <nav className={`${headerStyles.navbar}`}>
            {navbarOpen &&  <div className={`${headerStyles.backdrop}`} role="button" tabindex="0" onClick={closeDrawer}>
              <button className={`${headerStyles.close}`}><MdClose style={{fontSize: '24px'}} /></button>
            </div>}
            
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
                className={`${headerStyles.themeMode} ${darkMode.value ? headerStyles.sun : headerStyles.moon
                  }`}
              >
                {darkMode.value ? <TiAdjustBrightness /> : <FaMoon />}
              </div>
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
