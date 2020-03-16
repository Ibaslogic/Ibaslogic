import React from "react"

const styles = {
  fontSize: "1.125rem",
  lineHeight: "1.666666666667em",
  fontWeight: "700",
  borderBottom: "solid #f2f2f2 1px",
  paddingBottom: "1.25rem",
  margin: "1.25rem 1.875rem",
  marginBottom: "-0.0625rem",
  color: "#ff7a59",
  textTransform: "capitalize",
}

const SidebarTitle = props => {
  return <h3 style={styles}>{props.title}</h3>
}

export default SidebarTitle
