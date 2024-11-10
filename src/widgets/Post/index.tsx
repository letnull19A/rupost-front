import React from 'react'
import style from './styles.module.css'

type TPostProps = {
  text: string
}
 
const Post = (props: TPostProps) => {

  const { text } = props

  return (
    <div className={style.post}>
      <p>{ text } </p>
    </div>
  )
}

export default Post
