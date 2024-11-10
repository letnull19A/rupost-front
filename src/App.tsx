import { useEffect, useState } from 'react'
import {NewPost, Header, Preloader, Container, Post } from './widgets'
import { Post as PostApi} from './api'
import style from './styles.module.css'

function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState<Array<any>>([])

  useEffect(() => {
    setPosts(PostApi.getAll())
  }, [])

  return (
    <>
      <Header/>
      <Container className={style.posts}>
       <>
        <NewPost/>
        {posts.map((post, index) =>
         <Post
          key={index}
          text={post.text}/>
        )}
        <Preloader/>
       </>
      </Container>
    </>
  )
}

export default App
