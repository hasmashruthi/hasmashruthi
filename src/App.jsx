import React from 'react'
import './App.css'
import Header from './Components/Header'
import Content from './Components/Content'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
function App() {
  return (
    <div>
     <Header/>
     <Content/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App