import React, { useState } from 'react';
import ModalImage from 'react-modal-image';

import Skills from './Skills';

import GithubSVG from '../svgs/GithubSVG';
import HerokuSVG from '../svgs/HerokuSVG';

import projects from './ProjectsList';

const Projects = () => {
  const [project, setProject] = useState(1);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  function handleProject(e) {
    setProject(parseInt(e.target.id));
    setCurrentProject(projects[parseInt(e.target.id) - 1]);
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
          <p className='has-text-centered'>{currentProject.description}</p>
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
          <button
            className={
              'project-number is-centered is-size-6 ' +
              `${project === 8 ? 'current' : ''}`
            }
            onClick={handleProject}
            id='8'
            aria-label='Goto page 8'
          >
            8
          </button>
        </nav>
      </div>
      <Skills stack={currentProject.stack} />
    </section>
  );
};

export default Projects;
