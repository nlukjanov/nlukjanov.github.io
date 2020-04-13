import React from 'react'
import './App.scss'

import Intro from './components/Intro'
import Projects from './components/Projects'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  return (
    <>
      <Intro />
      <Projects />
      <About />
      <Footer />
    </>
  )
}

export default App
