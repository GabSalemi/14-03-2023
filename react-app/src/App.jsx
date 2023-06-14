import { useState } from 'react'
import Navbar from './components/navbar'
import Todo from './components/todo'
import './App.css'
import Button from './components/button'
import Form from './components/form'

function App() {
  

  return (
    <>
    <Navbar />
    <Form />
     
    <Todo />
    </>
  )
}

export default App
