import React from "react"

const styles = {
  fontSize: "20px",
  lineHeight: "1.666666666667em",
  fontWeight: "700",
  borderBottom: "solid #dfdfdf 1px",
  paddingBottom: "1.25rem",
  marginBottom: "-0.0625rem",
  // color: "#ff7a59",
  textTransform: "capitalize",
}

const SidebarTitle = props => {
  return <h3 style={styles}>{props.title}</h3>
}

export default SidebarTitle
