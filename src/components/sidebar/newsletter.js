import React from "react"
import RelatedArticles from "./RelatedArticles/relatedArticles"

import newsletterStyles from "./sidebar.module.scss"
import Subscribe from "../subscribe/subscribe"

const Newsletter = props => {
  return (
    <div className={newsletterStyles.sticky}>
      <div
        className={`sign__up ${newsletterStyles.signUp} ${newsletterStyles.widget}`}
      >
        <h3 className={newsletterStyles.title}>
          <span style={{ fontWeight: "700" }}>FREE</span> React Tutorial Book
        </h3>
        <p className={newsletterStyles.description}>
          Get Book (worth $14.99) now and start building web projects you’ll be
          happy to share.
        </p>
        <div className="sidebar__subscribe">
          <Subscribe submitText="Yes, I want" />
        </div>

        <div className={`get_inTouch ${newsletterStyles.getInTouch}`}>
          <p>Not into email list?</p>{" "}
          <span>
            <a
              href={`https://twitter.com/${props.socialhandle}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow me on Twitter
            </a>
          </span>
        </div>
      </div>
      {(props.relatedArticles.length && (
        <RelatedArticles articles={props.relatedArticles} slug={props.slug} />
      )) ||
        null}
    </div>
  )
}
export default Newsletter
