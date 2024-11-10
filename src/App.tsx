import { useEffect, useState } from 'react'
import { Header, Container, Post } from './widgets'
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
       {posts.map((post, index) =>
        <Post 
         key={index}
         text={post.text}/>
        )}
      </Container>
    </>
  )
}

export default App
