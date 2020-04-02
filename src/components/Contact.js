import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import LinkedInSVG from '../svgs/LinkedInSVG'
import GithubSVG from '../svgs/GithubSVG'

const Contact = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  function handleFlip() {
    setIsFlipped(prevState => ({ isFlipped: !prevState.isFlipped }))
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
      <button onClick={handleFlip} className='button has-text-primary'>
        Call me to Your action!
      </button>
      <div onClick={handleFlip} className='contact-links'>
        <a
          className='level-item is-centered is-size-6'
          href='https://www.linkedin.com/in/nikita-lukjanov'
          target='_blank'
          rel='noopener noreferrer'
        >
          <figure className='is-square is-paddingless'>
            <LinkedInSVG />
          </figure>
          <div className='contact-link'>linkedin.com/in/nikita-lukjanov</div>
        </a>
        <a
          className='level-item is-centered is-size-6'
          href='https://github.com/nlukjanov'
          target='_blank'
          rel='noopener noreferrer'
        >
          <figure className='is-square is-paddingless'>
            <GithubSVG />
          </figure>
          <div className='contact-link'>github.com/nlukjanov</div>
        </a>
      </div>
    </ReactCardFlip>
  )
}

export default Contact
