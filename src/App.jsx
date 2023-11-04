import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import Home from "./views/Home"
import Services from "./views/Services"
import Contact from "./views/Contact"

import './App.css'

function App() {


  return (
    <>
    <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
