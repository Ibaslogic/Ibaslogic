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
        <div className={newsletterStyles.newsletterContent}>
          <div className={newsletterStyles.headingContent}>
            <h3 className={newsletterStyles.title}>
              React Tutorial Book (valued at $14.99). Yours completely free!
            </h3>
            <p className={newsletterStyles.description}>
              Read at your pace and start building awesome projects!
            </p>
          </div>

          <div className="sidebar__subscribe">
            <Subscribe submitText="claim it now!" />
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
