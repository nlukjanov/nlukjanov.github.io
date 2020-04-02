import React from 'react'
import YarnSVG from '../svgs/YarnSVG'
import NPMSVG from '../svgs/NPMSVG'
import JSSVG from '../svgs/JSSVG'
import ReactSVG from '../svgs/ReactSVG'
import NodeSVG from '../svgs/NodeSVG'
import ExpressSVG from '../svgs/ExpressSVG'
import MongoSVG from '../svgs/MongoSVG'
import PythonSVG from '../svgs/PythonSVG'
import DjangoSVG from '../svgs/DjangoSVG'
import WebpackSVG from '../svgs/WebpackSVG'
import HTMLSVG from '../svgs/HTMLSVG'
import CSSSVG from '../svgs/CSSSVG'
import SassSVG from '../svgs/SassSVG'
import RubySVG from '../svgs/RubySVG'
import RailsSVG from '../svgs/RailsSVG'
import PostgresSVG from '../svgs/PostgresSVG'
import MochaSVG from '../svgs/MochaSVG'
import GitSVG from '../svgs/GitSVG'
import HerokuSVG from '../svgs/HerokuSVG'
import VSCodeSVG from '../svgs/VSCodeSVG'
import PostmanSVG from '../svgs/PostmanSVG'
import TrelloSVG from '../svgs/TrelloSVG'
import WordPressSVG from '../svgs/WordPressSVG'
import ExcelSVG from '../svgs/ExcelSVG'

const Skills = ({ stack }) => {
  return (
    <section className='container' id='skills'>
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
          <figure className='image is-square is-paddingless'>
            <JSSVG />
          </figure>
          <div className='label'>JavaScript</div>
        </div>
        <div
          className={
            'column ' +
            `${
              stack.includes('devicon-react-original') ? 'skill-highlight' : ''
            }`
          }
        >
          <figure className='image is-square is-paddingless'>
            <ReactSVG />
          </figure>
          <div className='label'>React.js</div>
        </div>
        <div
          className={
            'column ' +
            `${stack.includes('devicon-nodejs-plain') ? 'skill-highlight' : ''}`
          }
        >
          <figure className='image is-square is-paddingless'>
            <NodeSVG />
          </figure>
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
          <figure className='image is-square is-paddingless'>
            <ExpressSVG />
          </figure>
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
          <figure className='image is-square is-paddingless'>
            <MongoSVG />
          </figure>
          <div className='label'>MongoDB</div>
        </div>
        <div
          className={
            'column ' +
            `${stack.includes('devicon-python-plain') ? 'skill-highlight' : ''}`
          }
        >
          <figure className='image is-square is-paddingless'>
            <PythonSVG />
          </figure>
          <div className='label'>Python</div>
        </div>
        <div
          className={
            'column ' +
            `${stack.includes('devicon-django-plain') ? 'skill-highlight' : ''}`
          }
        >
          <figure className='image is-square is-paddingless'>
            <DjangoSVG />
          </figure>
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
          <figure className='image is-square is-paddingless'>
            <WebpackSVG />
          </figure>
          <div className='label'>Webpack</div>
        </div>
        <div
          className={
            'column ' +
            `${stack.includes('devicon-html5-plain') ? 'skill-highlight' : ''}`
          }
        >
          <figure className='image is-square is-paddingless'>
            <HTMLSVG />
          </figure>
          <div className='label'>HTML</div>
        </div>
        <div
          className={
            'column ' +
            `${stack.includes('devicon-css3-plain') ? 'skill-highlight' : ''}`
          }
        >
          <figure className='image is-square is-paddingless'>
            <CSSSVG />
          </figure>
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
          <figure className='image is-square is-paddingless'>
            <SassSVG />
          </figure>
          <div className='label'>SASS</div>
        </div>
        <div
          className={
            'column ' +
            `${stack.includes('devicon-ruby-plain') ? 'skill-highlight' : ''}`
          }
        >
          <figure className='image is-square is-paddingless'>
            <RubySVG />
          </figure>
          <div className='label'>Ruby</div>
        </div>
        <div
          className={
            'column ' +
            `${stack.includes('devicon-rails-plain') ? 'skill-highlight' : ''}`
          }
        >
          <figure className='image is-square is-paddingless'>
            <RailsSVG />
          </figure>
          <div className='label'>Rails</div>
        </div>
        <div
          className={
            `column ${stack.includes('npm') ? 'skill-highlight' : ''}`
          }
        >
          <figure className='image is-square is-paddingless'>
            <NPMSVG />
          </figure>
          <div className='label'>NPM</div>
        </div>
        <div
          className={
            `column ${stack.includes('yarn') ? 'skill-highlight' : ''}`
          }
        >
          <figure className='image is-square is-paddingless'>
            <YarnSVG />
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
          <figure className='image is-square is-paddingless'>
            <PostgresSVG />
          </figure>
          <div className='label'>PostgreSQL</div>
        </div>
        <div
          className={
            'column ' +
            `${stack.includes('devicon-mocha-plain') ? 'skill-highlight' : ''}`
          }
        >
          <figure className='image is-square is-paddingless'>
            <MochaSVG />
          </figure>
          <div className='label'>Mocha.js</div>
        </div>
        <div
          className={
            'column ' +
            `${stack.includes('devicon-git-plain') ? 'skill-highlight' : ''}`
          }
        >
          <figure className='image is-square is-paddingless'>
            <GitSVG />
          </figure>
          <div className='label'>Git</div>
        </div>
        <div
          className={
            'column ' +
            `${
              stack.includes('devicon-heroku-original') ? 'skill-highlight' : ''
            }`
          }
        >
          <figure className='image is-square is-paddingless'>
            <HerokuSVG />
          </figure>
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
          <figure className='image is-square is-paddingless'>
            <VSCodeSVG />
          </figure>
          <div className='label'>VSCode</div>
        </div>
        <div
          className={
            `column ${stack.includes('postman') ? 'skill-highlight' : ''}`
          }
        >
          <figure className='image is-square is-paddingless'>
            <PostmanSVG />
          </figure>
          <div className='label'>Postman</div>
        </div>
        <div
          className={
            'column ' +
            `${
              stack.includes('devicon-wordpress-plain') ? 'skill-highlight' : ''
            }`
          }
        >
          <figure className='image is-square is-paddingless'>
            <WordPressSVG />
          </figure>
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
          <figure className='image is-square is-paddingless'>
            <TrelloSVG />
          </figure>
          <div className='label'>Trello</div>
        </div>
        <div
          className={
            `column ${stack.includes('excel') ? 'skill-highlight' : ''}`
          }
        >
          <figure className='image is-square is-paddingless'>
            <ExcelSVG />
          </figure>
          <div className='label'>Excel</div>
        </div>
      </div>
    </section>
  )
}

export default Skills
