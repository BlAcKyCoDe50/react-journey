import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'; // Import Home component
import About from './Components/About/About.jsx'; //import about component
import Layout from './Components/Layout/layout.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github ,  { GithubInfoloader} from './Components/Github/Github.jsx';

// const router =  createBrowserRouter([
//   {path:'/',
//     element : <Layout/>,
//     children : [
//       {
//         path : "",
//         element : <Home/>
//       },
//       {
//         path : "about",
//         element : <About/>
//       },
//       {
//         path : "contact",
//         element : <Contact/>
//       }
//     ]
  
//   }
// ])
//alternate syntax of above page


const router = createBrowserRouter
(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>} >
    <Route path = '' element = {<Home/>} />
    <Route path = 'about' element = {<About/>} />
    <Route path = 'contact' element = {<Contact/>} />
    <Route path = 'user/:userid' element = {<User/>} />
    <Route 
    loader = {GithubInfoloader}
    path = 'github' 
    element = {<Github/>} 
    />
    </Route>
  )
) 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
