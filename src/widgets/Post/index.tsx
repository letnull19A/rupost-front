import React from 'react'
import style from './styles.module.css'

type TPostProps = {
  text: string
}
 
const Post = (props: TPostProps) => {

  const { text } = props

  return (
    <div className={style.post}>
      <div className={style.postInfo}>
       <div className={style.postInfoUser}>
        <div className={style.postInfoUserImage}></div>
        <a href='#'>user/id0</a>
       </div>
      <span>at 11:34pm</span>
      </div>
      <p className={style.postText}>
       { text } 
      </p>
    </div>
  )
}

export default Post
