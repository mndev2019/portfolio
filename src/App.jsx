import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'
 import Home from './Pages/Home'

import Skills from './Pages/Home/Skills'
import Education from './Pages/Home/Education'
import Contact from './Pages/Home/Contact'

// const Home = () => <section id="home"><Home/></section>
function App() {

 const ThemeRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<WebLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/resume' element={<Education/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Route>
  )
 )

  return (
    <>
     <RouterProvider router={ThemeRoute}/>
    </>
  )

}

export default App
