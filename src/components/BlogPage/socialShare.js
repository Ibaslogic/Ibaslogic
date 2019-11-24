import React from "react"
//import { StaticQuery, graphql } from "gatsby"
import shareStyles from "../../templates/blogpage.module.scss"
import ShareItems from "./shareItems"
// import {
//   FaFacebookF,
//   // FaGithub,
//   FaLinkedinIn,
//   FaTwitter,
// } from "react-icons/fa"

class SocialShare extends React.Component {
  state = {
    showSocialShare: false,
  }

  onScroll = () => {
    if (window.pageYOffset > 200) {
      this.setState({
        showSocialShare: true,
      })
    } else {
      this.setState({
        showSocialShare: false,
      })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll)
  }

  render() {
    const { slug, title, heading, twitterHandle, siteUrl } = this.props

    // const twitterHandle = this.props.data.site.siteMetadata.twitterHandle
    // const siteUrl = this.props.data.site.siteMetadata.siteUrl

    return (
      <>
        {/* {this.state.showSocialShare && ( */}
        <ShareItems
          heading={heading}
          slug={slug}
          title={title}
          twitterHandle={twitterHandle}
          siteUrl={siteUrl}
          customClass={
            this.state.showSocialShare
              ? `${shareStyles.shareInView}`
              : `${shareStyles.shareNotInView}`
          }
        />
        {/* )} */}
      </>
    )
  }
}

export default SocialShare

// export default props => (
//   <StaticQuery
//     query={graphql`
//       query {
//         site {
//           siteMetadata {
//             twitterHandle
//             siteUrl
//           }
//         }
//       }
//     `}
//     render={data => <SocialShare data={data} {...props} />}
//   />
// )

// import { FaFacebookF } from "react-icons/fa";
// FaFacebookF   FaFacebookSquare    FaFacebook
// FaGithub FaGithubSquare
// FaGooglePlusG FaGooglePlusSquare
// FaLinkedinIn FaLinkedin
// FaPinterestP  FaPinterestSquare
// FaTwitter   FaTwitterSquare
// <h3> Lets go for a <FaFacebookF />? </h3>
