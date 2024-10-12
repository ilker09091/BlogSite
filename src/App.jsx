import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePages from './Pages/HomePages'
import Blogs from './Pages/Blogs'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Erorr from './Pages/erorr'
function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePages />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Erorr />} />

        </Routes>
    </>
  )
}

export default App
