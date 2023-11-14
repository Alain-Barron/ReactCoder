import { useState } from 'react'
import './App.css'
import NavBar from "./components/navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Error/Error'
import Cart from './components/Cart/Cart'

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>

      <BrowserRouter>
      
      <NavBar/>
      <Routes>

      
      <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:idProduct' element={<ItemDetailContainer/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='*' element={<Error/>}/>
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
