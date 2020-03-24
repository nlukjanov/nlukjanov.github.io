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
      <div className='section'>
        <Intro />
        <Projects />
        <div className='section hero is-fullheight'>
          <Skills />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
