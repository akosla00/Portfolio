import React, { useState } from 'react'
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer'

function App() {
  const [page, setPage] = useState("portfolio")
  const currentPage = () => {
    if (page === "about") {
      return <About />
    }
    if (page === "portfolio") {
      return <Portfolio />
    }
    if (page === "contact") {
      return <Contact />
    }
    if (page === "resume") {
      return <Resume />
    }
  }
  return (
    <div className='portfolio-app'>
      <Navbar setPage={setPage} />
      {currentPage()}
      <Footer />
    </div>
  )
}

export default App
