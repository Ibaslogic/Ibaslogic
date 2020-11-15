import React from 'react'
import { FaPencilAlt } from "react-icons/fa"
import style from "./editPost.module.scss"

const EditPost = ({ pageContext, isSeries }) => {
  return (
    <a
      className={`edit__post ${style.editPost}`}
      href={
        `https://github.com/Ibaslogic/Ibaslogic/blob/master/src/contents/${isSeries ? "series" : "articles"}/` +
        pageContext.postPath
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaPencilAlt /> Edit on GitHub
    </a>
  )
}
export default EditPost
