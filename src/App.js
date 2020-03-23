import React from 'react'
import './App.scss'

import 'bulma'

import Intro from './components/Intro'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Intro />
      <Contact />
    </>
  )
}

export default App
