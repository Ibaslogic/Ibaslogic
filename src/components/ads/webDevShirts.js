import React from 'react'

import shirtAds from "./images/shirtAds.png"
import style from "./ads.module.scss"

const WebDevShirts = () => {
  return (
    <a className={style.link} target="_blank" rel="noopener noreferrer sponsored" href="https://teespring.com/stores/web-developer-design-tees">
      <img src={shirtAds} alt="shirt ads"/>
    </a>
  )
}

export default WebDevShirts