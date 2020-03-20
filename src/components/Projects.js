import React, { useState } from 'react'

const Projects = () => {
  const [project, setProject] = useState(1)
  // const lastPage = 6

  function handleProject(e) {
    setProject(Number(e.target.id))
  }

  // function handlePrevious() {
  //   if (project !== 1) {
  //     setProject(project - 1)
  //   }
  //   return
  // }

  // function handleNext() {
  //   if (project !== lastPage) {
  //     setProject(project + 1)
  //   }
  //   return
  // }



  return (
    <section className='section hero is-fullheight' id='projects'>
      <div className='title'>Projects</div>
      <div className='slidecontrol'>
        <nav
          className='level is-centered is-mobile'
          role='navigation'
          aria-label='pagination'
        >
          {/* <a href='!#' className={'arrow level-item is-centered is-size-5 ' + `${project === 1 ? '' : 'active'}`} onClick={handlePrevious}><i className="fas fa-angle-left"></i></a> */}
          <button className={
              'pagenum level-item is-centered is-size-5 is-family-secondary ' +
              `${project === 1 ? 'current' : ''}`
            }
            onClick={handleProject}
            id='1'
            aria-label='Goto page 1'
          >
            1
          </button>
          <button className={
              'pagenum level-item is-centered is-size-5 is-family-secondary ' +
              `${project === 2 ? 'current' : ''}`
            }
            onClick={handleProject}
            id='2'
            aria-label='Goto page 2'
          >
            2
          </button>
          <button className={
              'pagenum level-item is-centered is-size-5 is-family-secondary ' +
              `${project === 3 ? 'current' : ''}`
            }
            onClick={handleProject}
            id='3'
            aria-label='Goto page 3'
          >
            3
          </button>
          <button className={
              'pagenum level-item is-centered is-size-5 is-family-secondary ' +
              `${project === 4 ? 'current' : ''}`
            }
            onClick={handleProject}
            id='4'
            aria-label='Goto page 4'
          >
            4
          </button>
          <button className={
              'pagenum level-item is-centered is-size-5 is-family-secondary ' +
              `${project === 5 ? 'current' : ''}`
            }
            onClick={handleProject}
            id='5'
            aria-label='Goto page 5'
          >
            5
          </button>
          <button className={
              'pagenum level-item is-centered is-size-5 is-family-secondary ' +
              `${project === 6 ? 'current' : ''}`
            }
            onClick={handleProject}
            id='6'
            aria-label='Goto page 6'
          >
            6
          </button>
          {/* <a
            href='!#'
            className={
              'arrow level-item is-centered is-size-5 ' +
              `${project === lastPage ? '' : 'active'}`
            }
            onClick={handleNext}
          >
            <i className='fas fa-angle-right'></i>
          </a> */}
        </nav>
      </div>
      <div className='tile is-ancestor'>
        <div className='tile is-vertical is-8'>
          <div className='tile'>
            <div className='tile is-parent is-vertical'>
              <article className='tile is-child notification is-primary'>
                <p className='title'>Vertical...</p>
                <p className='subtitle'>Top tile</p>
              </article>
              <article className='tile is-child notification is-warning'>
                <p className='title'>...tiles</p>
                <p className='subtitle'>Bottom tile</p>
              </article>
            </div>
            <div className='tile is-parent'>
              <article className='tile is-child notification is-info'>
                <p className='title'>Middle tile</p>
                <p className='subtitle'>With an image</p>
                <figure className='image is-4by3'>
                  <img src='https://bulma.io/images/placeholders/640x480.png'></img>
                </figure>
              </article>
            </div>
          </div>
          <div className='tile is-parent'>
            <article className='tile is-child notification is-danger'>
              <p className='title'>Wide tile</p>
              <p className='subtitle'>Aligned with the right tile</p>
              <div className='content'>content</div>
            </article>
          </div>
        </div>
        <div className='tile is-parent'>
          <article className='tile is-child notification is-success'>
            <div className='content'>
              <p>
                A website to find someone to go on holiday with. It was a group
                project (3 people) built in 6 days using MERN stack. To maximise
                learning, I suggested rotating, so that each of us worked on
                models, controllers and front end. We spent a day planning our
                work and recording tasks on Trello and then went executing. I
                have personally built: user model, user controller,
                authentication, homepage component with search and filtering, my
                account page, set up auto-testing.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects
