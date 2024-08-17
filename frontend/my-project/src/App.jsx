import { useState } from 'react'
import Home from "../src/home/home.jsx"
import Courses from "../src/courses/courses.jsx"
import {Route,Routes} from "react-router-dom"
import Signup from './components/Signup.jsx'

function App() {

  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>


    </div>
      
    </>
  )
}

export default App
