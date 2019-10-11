import React from "react"

const styles = {
  fontSize: "1.125rem",
  lineHeight: "1.666666666667em",
  fontWeight: "700",
  borderBottom: "solid #f2f2f2 1px",
  paddingBottom: "1.25rem",
  margin: "1.25rem 1.875rem",
  marginBottom: "-0.0625rem",
  color: "#f44f18",
  textTransform: "capitalize",
}

const SidebarTitle = props => {
  return <p style={styles}>{props.title}</p>
}

export default SidebarTitle
