import React, { Component } from "react"

import { Link } from "gatsby"
import logo from "../../images/ibaslogic_logo.svg"

// header styles
import headerStyles from "./header.module.scss"

export default class Header extends Component {
  state = {
    navbarOpen: false,
    // css: "navbar",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/blog",
        text: "blog",
      },
      {
        id: 3,
        path: "/contact",
        text: "contact",
      },
      {
        id: 4,
        path: "/about",
        text: "about",
      },
    ],
  }

  handleToggle = () => {
    console.log("clicked")
    this.setState({
      navbarOpen: !this.state.navbarOpen,
    })
  }

  render() {
    return (
      <header className={headerStyles.container}>
        <div className={headerStyles.content}>
          <div className="brand">
            <Link to="/" className={headerStyles.brandLink}>
              <img src={logo} alt="ibaslogic logo" />
            </Link>
          </div>

          <nav className="navbar">
            <div
              className={this.state.navbarOpen ? "menu-btn close" : "menu-btn"} // add close class
              onClick={this.handleToggle}
            >
              <div className="btn-line"></div>
              <div className="btn-line"></div>
              <div className="btn-line"></div>
            </div>
            <ul // add show
              className={
                this.state.navbarOpen ? "menu-nav show-nav" : "menu-nav"
              }
            >
              {this.state.links.map(link => {
                return (
                  <li key={link.id} className="nav-item">
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
      </header>
    )
  }
}
