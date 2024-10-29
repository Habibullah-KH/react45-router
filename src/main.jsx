import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Component/Home.jsx';
import Header from './assets/Header/Header.jsx';
import AboutUs from './assets/Component/Aboutus/AboutUs.jsx';
import Contact from './assets/Component/Contact/Contact.jsx';
import Users from './assets/Component/Users/Users.jsx';
import UserDetail from './assets/Component/UserDetails.jsx/UserDetail.jsx';
import Posts from './assets/Component/posts/posts.jsx';
import PostDetails from './assets/Component/PostDetails/PostDetails.jsx';
import Errorpage from './assets/Component/Errorpage/Errorpage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
        element:<Users></Users>
      },

      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetail></UserDetail>
      },
      {
        path: '/posts',
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
        element:<Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
