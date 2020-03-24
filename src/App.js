import React from 'react'
import './App.scss'


import Intro from './components/Intro'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <div className='section'>
        <Intro />
        <Projects />
        <div className='section hero is-fullheight'>
          <Skills />
        </div>
      </div>
    </>
  )
}

export default App
