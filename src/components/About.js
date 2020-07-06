import React from 'react';

import Experience from './Experience';
import Interests from './Interests';

const About = () => {
  return (
    <section className='about section' id='about'>
      <div className='is-size-2 has-text-centered is-underlined'>About me:</div>
      <Experience />
      <Interests />
    </section>
  );
};

export default About;
