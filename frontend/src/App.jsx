import React from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup.jsx';
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<h1>Sign In Page</h1>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </>
  )
}

export default App
