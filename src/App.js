import React from 'react'
import "./App.css"
import Navbar from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home/Home'
import Project from './component/Project/Project'
import CodingProfile from './component/CodingProfile/CodingProfile'
import Contact from './component/Contact/Contact'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <Project/>
      <CodingProfile />
      <Contact/>
      {/* <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/codingprofile' element={<CodingProfile />}/>
        <Route path='/certificate' element={<Certificate />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes> */}
    </div>
  )
}

export default App