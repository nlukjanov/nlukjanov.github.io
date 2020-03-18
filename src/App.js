import React from 'react'
import './App.css'

import 'bulma'

import Intro from './components/Intro'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Intro />
      <Projects />
      <div className='section hero is-fullheight'>
        <Skills />
        <Contact />
      </div>
    </>
  )
}

export default App
