import {useState, useEffect} from 'react'
import {Post as PostApi} from './../../api'
import {Post, NewPost} from './../../widgets'

const Posts = () => {

 const [posts, setPosts] = useState<Array<any>>([])

 useEffect(() => {
  setPosts(PostApi.getAll())
 }, [])

 return (
  <>                                                 <NewPost/>
   {posts.map((post, index) =>
    <Post
     key={index}
     text={post.text}/>
   )}
  </>
 )
}

export default Posts 
