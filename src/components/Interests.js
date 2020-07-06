import React, { useState } from 'react';

import interests from './InterestsList';

const Interests = () => {
  const [project, setProject] = useState(1);
  const [currentInterest, setCurrentInterest] = useState(interests[0]);

  function handleExperience(e) {
    setProject(parseInt(e.target.id));
    setCurrentInterest(interests[parseInt(e.target.id) - 1]);
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
  );
};

export default Interests;
