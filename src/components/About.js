import React from 'react';

import Experience from './Experience';
import Interests from './Interests';

const About = () => {
  return (
    <section className='about section' id='about'>
      <div className='is-size-2 has-text-centered is-underlined'>About me:</div>
      <div className='column has-text-centered description'>
        <p className='has-text-centered'>
          I am a software engineer skilled in JavaScript and Python. I enjoy
          building functional, tested software and I am always up for a
          challenge. I am curious, I like solving complex problems and learning
          new things, be it new skills or new activities. Programming gives me
          exactly that and it is very rewarding to see working software as a
          result of my effort. Having studied physics, I learned how to learn
          fast and comprehend complex ideas quickly, while working in business,
          I was able to apply these skills to a broader range of topics.
        </p>
      </div>
      <Experience />
      <Interests />
    </section>
  );
};

export default About;
