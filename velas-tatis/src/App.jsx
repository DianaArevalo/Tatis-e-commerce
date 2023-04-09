import { useState } from 'react'
import { Home } from './Pages/Home'
import {Cart} from './Pages/Cart'
import {Favorites} from './Pages/Favorites'
import {Order} from './Pages/Order'
import {About} from './Pages/About'

// react router dom
import{
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet

} from 'react-router-dom'
//sidebar
import Sidebar from './components/Sidebar'

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/favs' element={<Favorites/>}/>
      <Route path='/orders' element={<Order/>}/>
      <Route path='/about' element={<About/>}/>
      
    </Route>
  )
)

  return (
   <div className='App'>
   <RouterProvider router={router}/>
   </div>
  )
}

export default App
const Root = ()=>{
  return(
    <>
    <div>
      <Sidebar/>
    </div>
     <div>
      <Outlet />
    </div>
    </>
   
  )
}
