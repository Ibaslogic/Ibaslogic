import React from 'react'

const Comment = ({ commentBoxRef }) => {
  return (
    <div ref={commentBoxRef} className="comments" />
  )
}
export default Comment
