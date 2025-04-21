import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'
import { Home, LogIn } from 'lucide-react'
import Auth from './Authentication/Auth'
import Register from './Authentication/Register'
import Error from './Pages/Error'
import AuthCheck from './AuthenticationCheck/AuthCheck'

function App() {


  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element= {
       <AuthCheck>
         <Home />
       </AuthCheck>
        } />
      <Route path="Auth" element= {<Auth />} />
      <Route path="login" element= {<LogIn />} />
      <Route path="register" element= {<Register />} /> 
      <Route path="" element= {<Error />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
