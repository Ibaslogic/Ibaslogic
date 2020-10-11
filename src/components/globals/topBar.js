import React from 'react'
import headerStyles from "./header.module.scss"

const TopBar = () => {
  return (
    <div className={headerStyles.main_flashes}>
      <div className={headerStyles.flashe_message}>
        <p>A free Gatsby theme for you! <a href="https://gatsby-site-agency.netlify.app/" target="_blank" rel="noopener noreferrer"> See demo </a> and a simple <a href="https://github.com/Ibaslogic/gatsby-theme-agency" target="_blank" rel="noopener noreferrer"> installation guide </a></p>         
        </div>
    </div>
  )
}
export default TopBar