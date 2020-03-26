import React from 'react'

import Contact from './Contact'

const Footer = () => {
  return (
    <section className='footer' id='footer'>
      <div className='buttons is-centered'>
        <Contact />
      </div>
      <p className='has-text-centered'>
        The typeface on the site developed under the roof of Museum Plantin
        Moretus with the highest respect to Henri du Tour, and his Reale Romain.
      </p>
    </section>
  )
}

export default Footer
