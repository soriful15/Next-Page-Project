import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Books from './Components/Books';
import ErrorPage from './Components/ErrorPage';
import BookDetail from './Components/book/BookDetail/BookDetail';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children :[

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books',
        element: <Books></Books>,
        loader : ()=>fetch('https://api.itbook.store/1.0/new')
      },
      {
path: 'book/:id',
element: <BookDetail></BookDetail>,
loader : ({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      {
        path: '/about',
        element: <About></About>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />


)
