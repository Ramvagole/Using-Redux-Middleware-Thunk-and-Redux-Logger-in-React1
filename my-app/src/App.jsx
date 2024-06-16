import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from './component/Creater'
import {Routes,Route, Link} from "react-router-dom"
import { Login } from './component/Login'
import { Coffee } from './component/Coffee'
import { Check } from './component/Check'
function App() {
  
  return (

    <>
     <div>
      <Link to="/">Login</Link><br/>
      <Link to="/coffee">Coffee list</Link>
     </div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/coffee" element={<Check><Coffee/></Check>}/>
      </Routes>
    </>
  )
}

export default App
