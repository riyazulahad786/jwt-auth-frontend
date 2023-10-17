import React from 'react'
import Register from './Components/Register'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/register' element={ <Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
     
    </div>
  )
}

export default App