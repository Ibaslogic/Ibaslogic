import React from 'react'
import headerStyles from "./header.module.scss"
import { Link } from "gatsby"

const TopBar = () => {
  return (
    <div className={headerStyles.main_flashes}>
      <div className={`flash__message ${headerStyles.flash_message}`}>
        <p>A free Gatsby theme for you! <a href="https://gatsby-site-agency.netlify.app/" target="_blank" rel="noopener noreferrer"> See demo </a> and a simple <Link to="/gatsby-theme-agency-installation/">installation guide</Link></p>         
        </div>
    </div>
  )
}
export default TopBar