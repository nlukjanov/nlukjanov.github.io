import React, { useState } from 'react'
import ModalImage from 'react-modal-image'

import Skills from './Skills'

import tetris1 from '../images/tetris1.webp'
import tetris2 from '../images/tetris2.webp'
import artjourney1 from '../images/artjourney1.webp'
import artjourney2 from '../images/artjourney2.webp'
import travelr1 from '../images/travelr1.webp'
import travelr2 from '../images/travelr2.webp'
import dietlogue1 from '../images/dietlogue1.webp'
import dietlogue2 from '../images/dietlogue2.webp'
import baliskin1 from '../images/baliskin1.webp'
import baliskin2 from '../images/baliskin2.webp'
import rs1 from '../images/rs1.webp'
import rs2 from '../images/rs2.webp'
import cj1 from '../images/cj1.webp'
import cj2 from '../images/cj2.webp'

import tetris1small from '../images/small/tetris1.webp'
import tetris2small from '../images/small/tetris2.webp'
import artjourney1small from '../images/small/artjourney1.webp'
import artjourney2small from '../images/small/artjourney2.webp'
import travelr1small from '../images/small/travelr1.webp'
import travelr2small from '../images/small/travelr2.webp'
import dietlogue1small from '../images/small/dietlogue1.webp'
import dietlogue2small from '../images/small/dietlogue2.webp'
import baliskin1small from '../images/small/baliskin1.webp'
import baliskin2small from '../images/small/baliskin2.webp'
import rs1small from '../images/small/rs1.webp'
import rs2small from '../images/small/rs2.webp'
import cj1small from '../images/small/cj1.webp'
import cj2small from '../images/small/cj2.webp'

import GithubSVG from '../svgs/GithubSVG'
import HerokuSVG from '../svgs/HerokuSVG'

const projects = [
  {
    projectName: 'Dietlogue',
    deployed: 'http://bit.ly/nl-sei4-live',
    repo: 'http://bit.ly/nl-sei4-repo',
    images: [dietlogue1, dietlogue2],
    smallImages: [dietlogue1small, dietlogue2small],
    stack: [
      'postman',
      'devicon-git-plain',
      'devicon-heroku-original',
      'devicon-react-original',
      'devicon-python-plain',
      'devicon-django-plain',
      'devicon-postgresql-plain',
      'devicon-sass-original'
    ],
    description:
      'It is a food tracker app. It was a pair project built in 6 days using Django and React. Users can create an account and log food they eat. The data is displayed in their account in the form of a weekly chart and daily records. Logs can be edited and back dated. We pair-programmed the back end. I have personally built built: router, secure route, create, edit, log history and navbar. I also made my account page excluding the chart.'
  },
  {
    projectName: 'Travelr',
    deployed: 'http://bit.ly/nl-sei3-live',
    repo: 'http://bit.ly/nl-sei3-repo',
    images: [travelr1, travelr2],
    smallImages: [travelr1small, travelr2small],
    stack: [
      'devicon-git-plain',
      'npm',
      'devicon-heroku-original',
      'devicon-react-original',
      'devicon-nodejs-plain',
      'devicon-webpack-plain',
      'devicon-mongodb-plain',
      'devicon-express-original',
      'devicon-mocha-plain',
      'postman'
    ],
    description:
      'A website to find someone to go on holiday with. It was a group project (3 people) built in 6 days using MERN stack. To maximise learning, I suggested rotating, so that each of us worked on models, controllers and front end. We spent a day planning our work and then went executing. I have personally built: user model, user controller, authentication, homepage component with search and filtering, my account page, set up auto-testing.'
  },
  {
    projectName: 'Art Journey',
    deployed: 'http://bit.ly/nl-sei2-live',
    repo: 'http://bit.ly/nl-sei2-repo',
    images: [artjourney1, artjourney2],
    smallImages: [artjourney1small, artjourney2small],
    stack: [
      'devicon-git-plain',
      'npm',
      'devicon-heroku-original',
      'devicon-react-original',
      'devicon-webpack-plain',
      'devicon-html5-plain',
      'devicon-css3-plain',
      'devicon-sass-original',
      'postman'
    ],
    description:
      'Pair programming project built using React in 2 days. My partner and I used RijksMuseum API to build a website for searching art pieces that are present in the collection. Great experience in building functional and stateful React components, handling multiple sequential API requests and using ternary operators for conditional displaying of elements.'
  },
  {
    projectName: 'Tetris',
    deployed: 'http://bit.ly/nl-sei1-heroku',
    repo: 'http://bit.ly/nl-sei1-repo',
    images: [tetris1, tetris2],
    smallImages: [tetris1small, tetris2small],
    stack: [
      'devicon-git-plain',
      'devicon-heroku-original',
      'devicon-javascript-plain',
      'devicon-html5-plain',
      'devicon-css3-plain'
    ],
    description:
      'First solo project after introduction to HTML, CSS and JS. Build in 6 days using vanilla JS. I had to break down the process to smaller scopes, such as creating a game board and tetrominoes, add manipulation, boundaries and scores. I added sounds and persistent leaderboard using local storage.'
  },
  {
    projectName: 'Bali Skin',
    deployed: 'http://baliskin.com/',
    repo: '',
    images: [baliskin1, baliskin2],
    smallImages: [baliskin1small, baliskin2small],
    stack: ['devicon-wordpress-plain', 'devicon-css3-plain'],
    description:
      'This is an e-commerce website that I have built while travelling. I have used WordPress themes and templates and bit of custom CSS. WordPress has a straight forward content management system which was suitable for this project.'
  },
  {
    projectName: 'Russian School',
    deployed: 'https://russianschool.org.uk/',
    repo: '',
    images: [rs1, rs2],
    smallImages: [rs1small, rs2small],
    stack: ['devicon-wordpress-plain', 'devicon-css3-plain'],
    description:
      'This is a website for Russian School in London that I was volunteering for. I have used WordPress themes and templates and a bit of custom CSS. I needed easy CMS any person could pick up in case I am not able to maintain the website anymore.WordPress seemed good fit for this purpose.'
  },
  {
    projectName: 'Calendar Journal',
    deployed: '',
    repo: '',
    images: [cj1, cj2],
    smallImages: [cj1small, cj2small],
    stack: [
      'devicon-react-original',
      'devicon-git-plain'
    ],
    description:
      'There are many sources that describe benefits of journaling. I am journaling almost every day. Currently I am working on the project where I the main page will have a calendar format with your journal entries displayed per day. It will be visually very descriptive when did you journal. Color labeling will allow for explicit visual representation of categories.'
  }
]

const Projects = () => {
  const [project, setProject] = useState(1)

  const [currentProject, setCurrentProject] = useState(projects[0])

  function handleProject(e) {
    setProject(parseInt(e.target.id))
    setCurrentProject(projects[parseInt(e.target.id) - 1])
  }

  return (
    <section className='project-block' id='projects'>
      <div className='is-size-2 has-text-centered is-underlined'>
        Projects and Tools:
      </div>
      <h2 className='is-size-3 has-text-centered'>
        {currentProject.projectName}
      </h2>
      <div className='columns'>
        <div className='column'>
          <ModalImage
            hideDownload={true}
            hideZoom={true}
            small={currentProject.smallImages[0]}
            large={currentProject.images[0]}
            alt={currentProject.projectName}
          />
        </div>
        <div className='column description'>
          <p className='has-text-centered'>
            {currentProject.description}
          </p>
          <div className='deployment-links'>
            <a href={currentProject.repo}>
              <figure className='is-square is-paddingless'>
                <GithubSVG />
              </figure>
              <div className='label'>Repo</div>
            </a>
            <a href={currentProject.deployed}>
              <figure className='is-square is-paddingless'>
                <HerokuSVG />
              </figure>
              <div className='label'>Live</div>
            </a>
          </div>
        </div>
      </div>
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
      <Skills stack={currentProject.stack} />
    </section>
  )
}

export default Projects
