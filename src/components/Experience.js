import React, { useState } from 'react';

const experience = [
  {
    position: 'Software Engineering Immersive Student',
    dates: 'December 2019 - March 2020',
    location: 'London',
    description:
      'This is a very practical 12 week course, where I learnt by building projects. I have built software using the most current and relevant technologies and methodologies. I had experience working solo and as a part of the team.'
  },
  {
    position: 'Finance Manager',
    dates: 'May 2016 - December 2019',
    location: 'London',
    description:
      'I efficiently managed budgets and finances of several different businesses of the same owners. Provided timely and accurate reports to owners and developed strategy. Researched and implemented an overseas payment system that reduced transaction costs for around £20k annually. Coordinated with the procurement department and successfully reconciled procurement projects for over £2m.'
  },
  {
    position: 'Traveller',
    dates: 'October 2014 - May 2016',
    location: 'Southeast Asia and Middle East',
    description:
      'I really got into surfing and decided to explore the world and surf in different places. I have spent most of my time living in Indonesia, but also, I have travelled around Southeast Asia and the Middle East. During my stay in Bali I have built and launched a small e-commerce website - Bali Skin. You can check it in the projects section.'
  },
  {
    position: 'Investment Analyst',
    dates: 'March 2014 - February 2015',
    location: 'London',
    description:
      'Created and maintained complex financial models of investments. Developed and presented real estate appraisals. Prepared financial reports. Executed due diligence.'
  },
  {
    position: 'MSc Financial Economics Student',
    dates: 'September 2011 - December 2013',
    location: 'London',
    description:
      'Here I was able to apply previously learned skills to study something completely different and further develop my analytical and problem solving skills. Received a degree with distinction.'
  },
  {
    position: 'BSc in Physics Student',
    dates: 'September 2005 - June 2009',
    location: 'Moscow',
    description:
      'Great academic education. I learned how to learn and it gave me a fundamental basis for future studies and work.'
  }
];

const Experience = () => {
  const [project, setProject] = useState(1);

  const [currentExperience, setCurrentExperience] = useState(experience[0]);

  function handleExperience(e) {
    setProject(parseInt(e.target.id));
    setCurrentExperience(experience[parseInt(e.target.id) - 1]);
  }

  return (
    <>
      <div className='is-size-4 has-text-centered'>Experience</div>
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
            aria-label='ga'
          >
            General Assembly
          </button>
          <button
            className={
              'project-number is-centered is-size-6 ' +
              `${project === 2 ? 'current' : ''}`
            }
            onClick={handleExperience}
            id='2'
            aria-label='phoenix'
          >
            Phoenix Prime
          </button>
          <button
            className={
              'project-number is-centered is-size-6 ' +
              `${project === 3 ? 'current' : ''}`
            }
            onClick={handleExperience}
            id='3'
            aria-label='sabbatical'
          >
            Sabbatical
          </button>
          <button
            className={
              'project-number is-centered is-size-6 ' +
              `${project === 4 ? 'current' : ''}`
            }
            onClick={handleExperience}
            id='4'
            aria-label='phoenix'
          >
            Phoenix Prime
          </button>
          <button
            className={
              'project-number is-centered is-size-6 ' +
              `${project === 5 ? 'current' : ''}`
            }
            onClick={handleExperience}
            id='5'
            aria-label='cityuni'
          >
            City University
          </button>
          <button
            className={
              'project-number is-centered is-size-6 ' +
              `${project === 6 ? 'current' : ''}`
            }
            onClick={handleExperience}
            id='6'
            aria-label='msu'
          >
            Moscow State University
          </button>
        </nav>
      </div>
      <div className='columns is-centered'>
        <div className='column has-text-centered description'>
          <div className='experience columns is-desktop'>
            <div className='column'>{currentExperience.position}</div>
            <div className='column'>{currentExperience.dates}</div>
            <div className='column'>{currentExperience.location}</div>
          </div>
          <p className='has-text-centered'>{currentExperience.description}</p>
        </div>
      </div>
    </>
  );
};

export default Experience;
