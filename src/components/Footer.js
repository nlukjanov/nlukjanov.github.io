import React from 'react'

import Contact from './Contact'

const Footer = () => {
  return (
    <section className='footer' id='footer'>
      <div className='buttons is-centered'>
        <Contact />
      </div>
      <div className='footer-text'>
        <p className='has-text-centered'>
          This portfolio website was created after finishing Software
          Engineering Immersive course <span>&#64;</span> General Assembly
          London.
        </p>
        <p className='has-text-centered'>
          The typeface on the site developed under the roof of Museum Plantin
          Moretus with the highest respect to Henri du Tour and his Reale
          Romain.
        </p>
        <p className='has-text-centered'>Nikita Lukjanov (c) 2020</p>
      </div>
    </section>
  )
}

export default Footer
