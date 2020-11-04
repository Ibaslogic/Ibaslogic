import React from "react"

const styles = {
  fontSize: "1.1rem",
  lineHeight: "1.666666666667em",
  fontWeight: "700",
  borderBottom: "solid rgb(247, 247, 247) 1px",
  paddingBottom: "1rem",
  marginBottom: "-0.0625rem",
  textTransform: "capitalize",
}

const SidebarTitle = props => {
  return (
    <h3 className="sidebarTitle" style={styles}>
      {props.title}
    </h3>
  )
}

export default SidebarTitle
