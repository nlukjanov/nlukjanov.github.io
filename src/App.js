import React from 'react'
import './App.scss'

import Intro from './components/Intro'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <section className='container'>
        <Intro />
      </section>
      <Projects />
    </>
  )
}

export default App
