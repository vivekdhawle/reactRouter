import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './home/Home.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './about/About.jsx'
import Contact from './contact/Contact.jsx'
import User from './user/User.jsx'
import Github,{githubInfoLoader} from './github/GitHub.jsx'

// const router=createBrowserRouter([{
//   path:'/',
//   element:<Layout/>,
//   children:[{
//     path:'',
//   element:<Home/>,
//   },{
//     path:'About',
//     element:<About/>,
//   },
//   {
//     path:'contact',
//     element:<Contact/>,
//   }]
// }])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="about" element={<About/>}></Route>
      <Route path="" element={<Home/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
      <Route path="login" element={<Contact/>}/>
      <Route 
      loader={githubInfoLoader}
      
      path="github" element={<Github/>}></Route>\
      <Route path="user/:userId" element={<User/>}></Route>
    </Route>
    
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
