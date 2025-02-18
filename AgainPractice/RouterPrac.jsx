import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from './Navbar'
import HOme from './HOme'
import About from './About'
import Contact from './Contact'
import Abc from './Abc'
const RouterPrac = () => {
   const router=createBrowserRouter([
      {
         path:'/',
         element: <div>
            <Navbar/>
            <HOme/>
            
         </div>,
         children:[
            {
               path:'abc',
               element: <div>
                  <Navbar/>
                  <Abc/>
               </div>
            }
         ]

      },
      {
         path:'/about',
         element: <div>
            <Navbar/>
            <About/>
         </div>
      },
      {
         path:'/contact',
         element: <div>
            <Navbar/>
            <Contact/>
         </div>
      }
   ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default RouterPrac