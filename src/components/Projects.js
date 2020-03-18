import React from 'react'
const Projects = () => {
  return (
    <section className='section hero is-fullheight' id='projects'>
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
