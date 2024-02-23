import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import About from './Pages/About'
import Locations from './Pages/Locations'
import Careers from './Pages/Careers'
import Main from './Pages/Main'
import Root from './Pages/Root'

function App() {
  
const router = createBrowserRouter((
  createRoutesFromElements(
    <Route path='/' element={<Root/>}> 
      <Route index element={<Main/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='location' element={<Locations/>}/>
      <Route path='careers' element={<Careers/>}/>
    </Route>
  )
))
  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
    </>
  )
}

export default App
