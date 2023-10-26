import { useState } from 'react'
import './App.css'
import NavBar from "./components/navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  
  const greeting = "Hola Tutor! Esta es mi pre-entrega"

  return (
    <>
      <NavBar/>
      <ItemListContainer mensaje={greeting}/>
    </>
  )
}

export default App
