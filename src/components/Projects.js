import React, { useState, useEffect } from 'react'

import Skills from './Skills'

import tetris1 from '../images/tetris1.png'
import tetris2 from '../images/tetris2.png'
import tetris3 from '../images/tetris3.png'
import artjourney1 from '../images/artjourney1.png'
import artjourney2 from '../images/artjourney2.png'
import artjourney3 from '../images/artjourney3.png'
import travelr1 from '../images/travelr1.png'
import travelr2 from '../images/travelr2.png'
import travelr3 from '../images/travelr3.png'
import dietlogue1 from '../images/dietlogue1.png'
import dietlogue2 from '../images/dietlogue2.png'
import dietlogue3 from '../images/dietlogue3.png'
import baliskin1 from '../images/baliskin1.png'
import baliskin2 from '../images/baliskin2.png'
import baliskin3 from '../images/baliskin3.png'
import rs1 from '../images/rs1.png'
import rs2 from '../images/rs2.png'
import rs3 from '../images/rs3.png'

const projects = [
  {
    projectName: 'Dietlogue',
    deployed: 'http://bit.ly/nl-sei4-live',
    repo: 'http://bit.ly/nl-sei4-repo',
    images: [dietlogue1, dietlogue2, dietlogue3],
    stack: [
      'postman',
      'devicon-git-plain',
      'devicon-heroku-original',
      'devicon-visualstudio-plain',
      'devicon-react-original',
      'devicon-python-plain',
      'devicon-django-plain',
      'devicon-postgresql-plain',
      'devicon-sass-original',
      'yarn'
    ],
    description:
      'It is a food tracker app. It was a pair project built in 6 days using Django and React. Users can create an account and log food they eat. The data is displayed in their account in the form of a weekly chart and daily records. Logs can be edited and back dated. It was another good opportunity to practice collaborative work. We pair-programmed the back end. After that, I created wireframes for the front end and built: router, secure route, create, edit, log history and navbar. I also made my account page excluding the chart.'
  },
  {
    projectName: 'Travelr',
    deployed: 'http://bit.ly/nl-sei3-live',
    repo: 'http://bit.ly/nl-sei3-repo',
    images: [travelr1, travelr2, travelr3],
    stack: [
      'devicon-git-plain',
      'npm',
      'devicon-heroku-original',
      'devicon-visualstudio-plain',
      'devicon-react-original',
      'devicon-nodejs-plain',
      'devicon-webpack-plain',
      'devicon-mongodb-plain',
      'devicon-express-original',
      'devicon-mocha-plain',
      'postman',
      'devicon-trello-plain smaller'
    ],
    description:
      'A website to find someone to go on holiday with. It was a group project (3 people) built in 6 days using MERN stack. To maximise learning, I suggested rotating, so that each of us worked on models, controllers and front end. We spent a day planning our work and recording tasks on Trello. After that I have built wireframes using Balsamiq software and we started coding. I have personally built: user model, user controller, authentication, homepage component with search and filtering, my account page, set up auto-testing.'
  },
  {
    projectName: 'Art Journey',
    deployed: 'http://bit.ly/nl-sei2-live',
    repo: 'http://bit.ly/nl-sei2-repo',
    images: [artjourney1, artjourney2, artjourney3],
    stack: [
      'devicon-git-plain',
      'npm',
      'devicon-heroku-original',
      'devicon-visualstudio-plain',
      'devicon-react-original',
      'devicon-webpack-plain',
      'devicon-html5-plain',
      'devicon-css3-plain',
      'devicon-sass-original',
      'postman'
    ],
    description:
      'Pair programming project built using React in 2 days. My partner and I used RijksMuseum API to build a website for searching art pieces that are present in the collection. Great experience in building functional and stateful React components, handling multiple sequential API requests and using ternary operators for conditional displaying of elements. Availability of hi-res images allowed us to implement few third-party components: loading screen that is shown until images are loaded and magnifying glass.'
  },
  {
    projectName: 'Tetris',
    deployed: 'http://bit.ly/nl-sei1-heroku',
    repo: 'http://bit.ly/nl-sei1-repo',
    images: [tetris1, tetris2, tetris3],
    stack: [
      'devicon-git-plain',
      'devicon-heroku-original',
      'devicon-visualstudio-plain',
      'devicon-javascript-plain',
      'devicon-html5-plain',
      'devicon-css3-plain'
    ],
    description:
      'First solo project after introduction to HTML, CSS and JS. Build in 6 days using vanilla JS. I had to break down the process to smaller scopes, such as creating a game board and tetrominoes, add manipulation, boundaries and scores. Game board is an array of cells displayed as grid. Boundaries and rotations were the trickiest parts to implement. I have added sounds and music. Music speed increases with game level. Also I have added a persistent leader board using local storage. Deployed to heroku using one line PHP server.'
  },
  {
    projectName: 'Bali Skin',
    deployed: 'http://baliskin.com/',
    repo: '',
    images: [baliskin1, baliskin2, baliskin3],
    stack: ['devicon-wordpress-plain', 'devicon-css3-plain'],
    description:
      'This is an e-commerce website that I have built while travelling. I have used WordPress themes and templates and bit of custom CSS. WordPress has a straight forward content management system which was suitable for this project.'
  },
  {
    projectName: 'Russian School',
    deployed: 'https://russianschool.org.uk/',
    repo: '',
    images: [rs1, rs2, rs3],
    stack: ['devicon-wordpress-plain', 'devicon-css3-plain'],
    description:
      'This is a website for Russian School in London that I was volunteering for. I have used WordPress themes and templates and a bit of custom CSS. I needed easy CMS any person could pick up in case I am not able to maintain the website anymore.WordPress seemed good fit for this purpose.'
  },
  {
    projectName: 'Calendar Journal',
    deployed: '',
    repo: '',
    images: [],
    stack: ['devicon-react-original'],
    description:
      'There are many sources that describe benefits of journaling. I am journaling almost every day. Currently I am working on the project where I the main page will have a calendar format with your journal entries displayed per day. It will be visually very descriptive when did you journal. Also color labeling will allow to see the categories of your entries.'
  }
]

const Projects = () => {
  const [project, setProject] = useState(1)

  const [currentProject, setCurrentProject] = useState(projects[0])

  function handleProject(e) {
    setProject(parseInt(e.target.id))
    setCurrentProject(projects[parseInt(e.target.id) - 1])
  }
  useEffect(() => console.log(currentProject), [currentProject])

  return (
    <section className='' id='projects'>
      <div className='is-size-2 has-text-centered is-underlined'>Projects:</div>
      <h2 className='is-size-3 has-text-centered'>
        {currentProject.projectName}
      </h2>
      <p className='is-size-6 has-text-centered description'>
        {currentProject.description}
      </p>
      <div className="columns">
        <div className="column">
          {currentProject.deployed}
        </div>
        <div className="column">
          {currentProject.repo}
        </div>
      </div>
      <div className='slide-control'>
        <nav
          className='level is-centered is-mobile'
          role='navigation'
          aria-label='pagination'
        >
          <button
            className={
              'project-number is-centered is-size-6 ' +
              `${project === 1 ? 'current' : ''}`
            }
            onClick={handleProject}
            id='1'
            aria-label='Goto page 1'
          >
            1
          </button>
          <button
            className={
              'project-number is-centered is-size-6 ' +
              `${project === 2 ? 'current' : ''}`
            }
            onClick={handleProject}
            id='2'
            aria-label='Goto page 2'
          >
            2
          </button>
          <button
            className={
              'project-number is-centered is-size-6 ' +
              `${project === 3 ? 'current' : ''}`
            }
            onClick={handleProject}
            id='3'
            aria-label='Goto page 3'
          >
            3
          </button>
          <button
            className={
              'project-number is-centered is-size-6 ' +
              `${project === 4 ? 'current' : ''}`
            }
            onClick={handleProject}
            id='4'
            aria-label='Goto page 4'
          >
            4
          </button>
          <button
            className={
              'project-number is-centered is-size-6 ' +
              `${project === 5 ? 'current' : ''}`
            }
            onClick={handleProject}
            id='5'
            aria-label='Goto page 5'
          >
            5
          </button>
          <button
            className={
              'project-number is-centered is-size-6 ' +
              `${project === 6 ? 'current' : ''}`
            }
            onClick={handleProject}
            id='6'
            aria-label='Goto page 6'
          >
            6
          </button>
          <button
            className={
              'project-number is-centered is-size-6 ' +
              `${project === 7 ? 'current' : ''}`
            }
            onClick={handleProject}
            id='7'
            aria-label='Goto page 7'
          >
            7
          </button>
        </nav>
      </div>
      <div className='columns'>
        <div className='column'>
          <img src={currentProject.images[0]} alt='project' />
        </div>
        <div className='column'>
          <img src={currentProject.images[1]} alt='project' />
        </div>
        <div className='column'>
          <img src={currentProject.images[2]} alt='project' />
        </div>
      </div>
      <Skills stack={currentProject.stack} />
    </section>
  )
}

export default Projects
