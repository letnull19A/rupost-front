import {Outlet, createBrowserRouter, RouterProvider} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {Header, Preloader, Container} from './widgets'
import style from './styles.module.css'
import {Posts, Login, Registration} from './pages'

const Wrapper = () => {
 return (
  <>
   <Header/>
   <Container className={style.posts}>
    <Outlet/>
   </Container>
  </>
 )
}

function App() {

 const router = createBrowserRouter([
  {
   path: '/',
   element: <Wrapper/>,
   children: [
    {
     path: 'test',
     element: <>test</>
    },
    {
     path: 'login',
     element: <Login/>
    },
    {
     path: '',
     element: <Posts/>
    },
    {
     path: 'registration',
     element: <Registration/>
    }
   ]
  }
 ])

  return (
   <RouterProvider router={router}/>
  )
}

export default App
