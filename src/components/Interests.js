import React, { useState } from 'react'

const interests = [
  {
    interest: 'programming',
    locations: [],
    description:
      'My professional developer journey started from the interest in programming. I enjoy iе so much that in my free time you can often find me coding.'
  },
  {
    interest: 'surfing',
    locations: [
      'Portugal',
      'Vietnam',
      'China',
      'Indonesia',
      'Philippines',
      'UK',
      'Morocco',
      'Spain'
    ],
    description:
      'I am a big fan of surfing. I started back in 2013 in Portugal and since then have surfed a variety of spots in different countries. I love it because it gives an unexplainable feeling of feedback and unity with nature.'
  },
  {
    interest: 'kitesurfing',
    locations: ['Philippines', 'UK', 'Egypt', 'Spain'],
    description:
      'I learned kite surfing in the Philippines in 2015 and since then I try to go once a year to Egypt with my friends. Sometimes I kite in the UK when the weather is nice. It is an amazing feeling when you do jumps and can fly for a bit.'
  },
  {
    position: 'snowboarding/skiing',
    locations: ['France', 'Russia'],
    description:
      'I started snowboarding back in 2004 in the north of Russia, where in the winter temperatures are around -25C. After that I had a long break, but in 2016 started again. At the same time I have learned to ski. Now every time I go to the snowy mountains I do both and try learning new tricks.'
  },
  {
    position: 'climbing',
    locations: ['UK', 'Spain'],
    description:
      'I did an indoor climbing course in 2012 and since then was climbing and bouldering from time to time. When I have been in Spain I tried bouldering on the real terrain and it was an amazing experience.'
  }
]

const Interests = () => {
  const [project, setProject] = useState(1)
  const [currentInterest, setCurrentInterest] = useState(interests[0])

  function handleExperience(e) {
    setProject(parseInt(e.target.id))
    setCurrentInterest(interests[parseInt(e.target.id) - 1])
  }

  return (
    <>
      <div className='is-size-4 has-text-centered'>Interests</div>
      <div className='slide-control'>
        <nav
          className='is-centered is-mobile'
          role='navigation'
          aria-label='pagination'
        >
          <button
            className={
              'project-number is-centered is-size-6 ' +
              `${project === 1 ? 'current' : ''}`
            }
            onClick={handleExperience}
            id='1'
            aria-label='programming'
          >
            Programming
          </button>
          <button
            className={
              'project-number is-centered is-size-6 ' +
              `${project === 2 ? 'current' : ''}`
            }
            onClick={handleExperience}
            id='2'
            aria-label='surfing'
          >
            Surfing
          </button>
          <button
            className={
              'project-number is-centered is-size-6 ' +
              `${project === 3 ? 'current' : ''}`
            }
            onClick={handleExperience}
            id='3'
            aria-label='kite'
          >
            Kite Surfing
          </button>
          <button
            className={
              'project-number is-centered is-size-6 ' +
              `${project === 4 ? 'current' : ''}`
            }
            onClick={handleExperience}
            id='4'
            aria-label='snowboard'
          >
            Snowboarding/Skiing
          </button>
          <button
            className={
              'project-number is-centered is-size-6 ' +
              `${project === 5 ? 'current' : ''}`
            }
            onClick={handleExperience}
            id='5'
            aria-label='climbing'
          >
            Climbing
          </button>
        </nav>
      </div>
      <div className='columns is-centered'>
        <div className='column description'>
          <p className='has-text-centered'>{currentInterest.description}</p>
          <div className='has-text-centered description interest'>
            {currentInterest.locations.length !== 0 && (
              <>
                <p className=''>I did it in the following countries:</p>
                <div>
                  {currentInterest.locations.map((location, index) => (
                    <span className='has-text-centered' key={index}>
                      {`${location} |`}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Interests
