import React from 'react'

const Skills = ({ stack }) => {
  console.log(stack)
  return (
    <section className='section' id='skills'>
      <div className=''>
        <div className='is-size-2 has-text-centered is-underlined'>Tools:</div>
        <div className='columns is-mobile is-multiline'>
          <div
            className={
              'column ' +
              `${
                stack.includes('devicon-javascript-plain')
                  ? 'skill-highlight'
                  : ''
              }`
            }
          >
            <i className='devicon-javascript-plain'></i>
            <div className='label'>JavaScript</div>
          </div>
          <div
            className={
              'column ' +
              `${
                stack.includes('devicon-react-original')
                  ? 'skill-highlight'
                  : ''
              }`
            }
          >
            <i className='devicon-react-original'></i>
            <div className='label'>React.js</div>
          </div>
          <div
            className={
              'column ' +
              `${
                stack.includes('devicon-nodejs-plain') ? 'skill-highlight' : ''
              }`
            }
          >
            <i className='devicon-nodejs-plain'></i>
            <div className='label'>Node.js</div>
          </div>
          <div
            className={
              'column ' +
              `${
                stack.includes('devicon-express-original')
                  ? 'skill-highlight'
                  : ''
              }`
            }
          >
            <i className='devicon-express-original'></i>
            <div className='label'>Express.js</div>
          </div>
          <div
            className={
              'column ' +
              `${
                stack.includes('devicon-mongodb-plain') ? 'skill-highlight' : ''
              }`
            }
          >
            <i className='devicon-mongodb-plain'></i>
            <div className='label'>MongoDB</div>
          </div>
          <div
            className={
              'column ' +
              `${
                stack.includes('devicon-python-plain') ? 'skill-highlight' : ''
              }`
            }
          >
            <i className='devicon-python-plain'></i>
            <div className='label'>Python</div>
          </div>
          <div
            className={
              'column ' +
              `${
                stack.includes('devicon-django-plain') ? 'skill-highlight' : ''
              }`
            }
          >
            <i className='devicon-django-plain'></i>
            <div className='label'>Django</div>
          </div>
          <div
            className={
              'column ' +
              `${
                stack.includes('devicon-webpack-plain') ? 'skill-highlight' : ''
              }`
            }
          >
            <i className='devicon-webpack-plain'></i>
            <div className='label'>Webpack</div>
          </div>
          <div
            className={
              'column ' +
              `${
                stack.includes('devicon-html5-plain') ? 'skill-highlight' : ''
              }`
            }
          >
            <i className='devicon-html5-plain'></i>
            <div className='label'>HTML</div>
          </div>
          <div
            className={
              'column ' +
              `${stack.includes('devicon-css3-plain') ? 'skill-highlight' : ''}`
            }
          >
            <i className='devicon-css3-plain'></i>
            <div className='label'>CSS</div>
          </div>
          <div
            className={
              'column ' +
              `${
                stack.includes('devicon-sass-original') ? 'skill-highlight' : ''
              }`
            }
          >
            <i className='devicon-sass-original'></i>
            <div className='label'>SASS</div>
          </div>
          <div
            className={
              'column ' +
              `${stack.includes('devicon-ruby-plain') ? 'skill-highlight' : ''}`
            }
          >
            <i className='devicon-ruby-plain'></i>
            <div className='label'>Ruby</div>
          </div>
          <div
            className={
              'column ' +
              `${
                stack.includes('devicon-rails-plain') ? 'skill-highlight' : ''
              }`
            }
          >
            <i className='devicon-rails-plain'></i>
            <div className='label'>Rails</div>
          </div>
          <div
            className={
              'column ' + `${stack.includes('npm') ? 'skill-highlight' : ''}`
            }
          >
            <figure className='image is-square is-paddingless'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'
                height='47'
              >
                <path d='M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z' />
              </svg>
            </figure>
            <div className='label'>NPM</div>
          </div>
          <div
            className={
              'column ' + `${stack.includes('yarn') ? 'skill-highlight' : ''}`
            }
          >
            <figure className='image is-square is-paddingless'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 496 512'
                height='47'
              >
                <path d='M393.9 345.2c-39 9.3-48.4 32.1-104 47.4 0 0-2.7 4-10.4 5.8-13.4 3.3-63.9 6-68.5 6.1-12.4.1-19.9-3.2-22-8.2-6.4-15.3 9.2-22 9.2-22-8.1-5-9-9.9-9.8-8.1-2.4 5.8-3.6 20.1-10.1 26.5-8.8 8.9-25.5 5.9-35.3.8-10.8-5.7.8-19.2.8-19.2s-5.8 3.4-10.5-3.6c-6-9.3-17.1-37.3 11.5-62-1.3-10.1-4.6-53.7 40.6-85.6 0 0-20.6-22.8-12.9-43.3 5-13.4 7-13.3 8.6-13.9 5.7-2.2 11.3-4.6 15.4-9.1 20.6-22.2 46.8-18 46.8-18s12.4-37.8 23.9-30.4c3.5 2.3 16.3 30.6 16.3 30.6s13.6-7.9 15.1-5c8.2 16 9.2 46.5 5.6 65.1-6.1 30.6-21.4 47.1-27.6 57.5-1.4 2.4 16.5 10 27.8 41.3 10.4 28.6 1.1 52.7 2.8 55.3.8 1.4 13.7.8 36.4-13.2 12.8-7.9 28.1-16.9 45.4-17 16.7-.5 17.6 19.2 4.9 22.2zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256 111.1 8 248 8s248 111.1 248 248zm-79.3 75.2c-1.7-13.6-13.2-23-28-22.8-22 .3-40.5 11.7-52.8 19.2-4.8 3-8.9 5.2-12.4 6.8 3.1-44.5-22.5-73.1-28.7-79.4 7.8-11.3 18.4-27.8 23.4-53.2 4.3-21.7 3-55.5-6.9-74.5-1.6-3.1-7.4-11.2-21-7.4-9.7-20-13-22.1-15.6-23.8-1.1-.7-23.6-16.4-41.4 28-12.2.9-31.3 5.3-47.5 22.8-2 2.2-5.9 3.8-10.1 5.4h.1c-8.4 3-12.3 9.9-16.9 22.3-6.5 17.4.2 34.6 6.8 45.7-17.8 15.9-37 39.8-35.7 82.5-34 36-11.8 73-5.6 79.6-1.6 11.1 3.7 19.4 12 23.8 12.6 6.7 30.3 9.6 43.9 2.8 4.9 5.2 13.8 10.1 30 10.1 6.8 0 58-2.9 72.6-6.5 6.8-1.6 11.5-4.5 14.6-7.1 9.8-3.1 36.8-12.3 62.2-28.7 18-11.7 24.2-14.2 37.6-17.4 12.9-3.2 21-15.1 19.4-28.2z' />
              </svg>
            </figure>
            <div className='label'>Yarn</div>
          </div>
          <div
            className={
              'column ' +
              `${
                stack.includes('devicon-postgresql-plain')
                  ? 'skill-highlight'
                  : ''
              }`
            }
          >
            <i className='devicon-postgresql-plain'></i>
            <div className='label'>PostgreSQL</div>
          </div>
          <div
            className={
              'column ' +
              `${
                stack.includes('devicon-mocha-plain') ? 'skill-highlight' : ''
              }`
            }
          >
            <i className='devicon-mocha-plain'></i>
            <div className='label'>Mocha.js</div>
          </div>
          <div
            className={
              'column ' +
              `${stack.includes('devicon-git-plain') ? 'skill-highlight' : ''}`
            }
          >
            <i className='devicon-git-plain'></i>
            <div className='label'>Git</div>
          </div>
          <div
            className={
              'column ' +
              `${
                stack.includes('devicon-heroku-original')
                  ? 'skill-highlight'
                  : ''
              }`
            }
          >
            <i className='devicon-heroku-original'></i>
            <div className='label'>Heroku</div>
          </div>
          <div
            className={
              'column ' +
              `${
                stack.includes('devicon-visualstudio-plain')
                  ? 'skill-highlight'
                  : ''
              }`
            }
          >
            <i className='devicon-visualstudio-plain'></i>
            <div className='label'>VSCode</div>
          </div>
          <div
            className={
              'column ' +
              `${stack.includes('postman') ? 'skill-highlight' : ''}`
            }
          >
            <figure className='image is-square is-paddingless'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                focusable='false'
                preserveAspectRatio='xMidYMid meet'
                viewBox='0 0 32 32'
              >
                <path d='M18.036.131C9.271-.989 1.255 5.198.131 13.964c-1.12 8.765 5.067 16.781 13.833 17.905c8.765 1.12 16.781-5.067 17.9-13.833C32.989 9.271 26.803 1.255 18.036.131zm3.292 9.984c-.297 0-.579.12-.787.333l-5.937 5.932l-.411-.407l-.855-.859c5.849-5.833 6.907-5.891 7.989-5zm-6.479 6.478l5.916-5.921a.831.831 0 0 1 1.204.005a.825.825 0 0 1-.073 1.197l-6.265 5.5zm.438.928l-1.469.317a.085.085 0 0 1-.088-.047a.08.08 0 0 1 .016-.095l.859-.859zm-3.74-.614l1.568-1.563l1.172 1.172l-2.641.567a.1.1 0 0 1-.115-.052a.102.102 0 0 1 .016-.124zm-4.859 8.077c-.057-.005-.1-.057-.095-.109a.122.122 0 0 1 .032-.063h.005l1.26-1.26l1.631 1.631zm3.233-1.677a.313.313 0 0 0-.156.344l.271 1.152c.043.167-.161.28-.281.156H9.75l-1.635-1.636l5.016-5.011l2.427-.525l1.161 1.167c-1.672 1.468-3.959 2.932-6.797 4.353zm7.038-4.567l-1.12-1.12l6.265-5.5c.057-.052.109-.109.156-.167c-.192 1.792-2.703 4.323-5.301 6.787zm4.88-8.615h-.005c-2.183-2.193.901-5.563 3.276-3.584l-2.145 2.152a.161.161 0 0 0 0 .228l1.661 1.663a2.418 2.418 0 0 1-2.787-.459zm3.432 0a2.136 2.136 0 0 1-.359.291l-1.609-1.609l2.041-2.047a2.428 2.428 0 0 1-.073 3.365zm-.131-2.057a.19.19 0 0 0-.072.208a.548.548 0 0 1-.068.599a.185.185 0 0 0 .031.265a.198.198 0 0 0 .109.037c.057 0 .111-.021.141-.063a.931.931 0 0 0 .12-1.005a.185.185 0 0 0-.261-.041z' />
              </svg>
            </figure>
            <div className='label'>Postman</div>
          </div>
          <div
            className={
              'column ' +
              `${
                stack.includes('devicon-wordpress-plain')
                  ? 'skill-highlight'
                  : ''
              }`
            }
          >
            <i className='devicon-wordpress-plain'></i>
            <div className='label'>WordPress</div>
          </div>
          <div
            className={
              'column ' +
              `${
                stack.includes('devicon-trello-plain smaller')
                  ? 'skill-highlight'
                  : ''
              }`
            }
          >
            <i className='devicon-trello-plain smaller'></i>
            <div className='label'>Trello</div>
          </div>
          <div
            className={
              'column ' + `${stack.includes('excel') ? 'skill-highlight' : ''}`
            }
          >
            <figure className='image is-square is-paddingless'>
              <svg
                viewBox='0 0 24 24'
                preserveAspectRatio='xMidYMid meet'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M23.553 3.102h-8.04V4.59h2.37v2.354h-2.37v.75h2.37v2.357h-2.37v.771h2.37v2.229h-2.37v.893h2.37v2.234h-2.37v.893h2.37v2.247h-2.37v1.639h8.04c.127-.038.233-.188.318-.448.085-.262.129-.475.129-.636V3.374c0-.128-.044-.205-.129-.232-.085-.026-.191-.04-.318-.04zM22.51 19.316h-3.857v-2.245h3.857v2.247-.002zm0-3.138h-3.857v-2.235h3.857v2.235zm0-3.128h-3.857v-2.219h3.857v2.221-.002zm0-3h-3.857V7.696h3.857v2.355-.001zm0-3.119h-3.857v-2.34h3.857v2.355-.015zM0 2.731v18.601l14.16 2.449V.219L0 2.739v-.008zm8.393 14.071c-.054-.146-.308-.766-.758-1.863-.449-1.096-.72-1.734-.799-1.916h-.025l-1.519 3.615-2.03-.137 2.408-4.5-2.205-4.5 2.07-.109 1.368 3.521h.027l1.545-3.681 2.139-.135-2.547 4.87 2.625 4.968-2.299-.135v.002z' />
              </svg>
            </figure>
            <div className='label'>Excel</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
