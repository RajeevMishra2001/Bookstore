import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'

import Course from './Components/Course'
import Signup from './Components/Signup'

function App() {


  return (
    <>
    <div className='dark:bg-black dark:text-white'>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Home' element={<Home />} />
          <Route path='/Course' element={<Course />} />
          <Route path='Signup' element={<Signup/>} />
        </Routes>

      </BrowserRouter>
      </div>
    </>
  )
}

export default App
