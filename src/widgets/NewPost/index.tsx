import style from './styles.module.css'

const NewPost = () => {
  return (
    <div className={style.newPost}>
      <input
        type='text'
        className={style.newPostInput}
        placeholder='текст нового поста'/>
      <button>Ок</button>
    </div>
  )
}

export default NewPost
