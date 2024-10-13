import { Link, Route, Router, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Login  from './components/Login'
import CreateAccount  from "./components/CreateAccount"
import HomePage from './components/HomePage'
import CreateHissab from "./components/CreateHissab";


function App() {
  const  location =   useLocation()
  return (
    <>
 
       {location.pathname !== '/' && location.pathname !==  "/create" &&  <Nav/>  }
       <Routes>
         <Route  path="/"  element={<Login/>} />
         <Route path="/create"  element={<CreateAccount/>} />
         <Route path="/home" element={<HomePage/>}/>
         <Route path="/home/CreateHissab" element={<CreateHissab/>} />
       </Routes>
    </>
  )
}

export default App;
