import React from 'react'
import Contact from './Contact'

const Intro = () => {
  return (
    <section className='hero hero-body is-fullheight' id='intro'>
        <div className='container has-text-centered'>
          <h1 className='is-size-1-tablet'><span className="invert">Nikita Lukjanov</span></h1>
          <h2 className='is-size-2-tablet'><span className="invert">Software Developer</span></h2>
          <h2 className='is-size-2-tablet'><span className="symbol"> </span></h2>
          <p className='is-size-4-tablet'>
            I am a full-stack software engineer skilled in JavaScript and
            Python. I build functional, tested software and I am always up for a
            challenge. I am curious, I like solving complex problems and
            learning new things, be it new skills or new activities. Programming
            gives me exactly that and it is very rewarding to see working
            software as a result of my effort. Having studied physics, I learned
            how to learn fast and comprehend complex ideas quickly, while
            working in business, I was able to apply these skills to a broader
            range of topics. Now, I am looking for a full-stack position where I
            can solve problems, contribute, learn and further grow as an
            engineer.
          </p>
          <Contact />
        </div>
    </section>
  )
}

export default Intro
