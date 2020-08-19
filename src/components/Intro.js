import React from 'react';
import Contact from './Contact';
import Typist from 'react-typist';

const Intro = () => {
  return (
    <section className='hero is-fullheight' id='intro'>
      <div className='hero-body centered'>
        <div className='has-text-centered'>
          <Typist stdTypingDelay={0}>
            <h1 className='intro-text'>
              <span className='invert'>Nikita Lukjanov</span>
            </h1>
            <h2 className='intro-text'>
              <span className='invert'>software engineer</span>
            </h2>
            <h2 className='intro-text'>
              <span className='symbol'> </span>
            </h2>
          </Typist>
          <section className='contact' id='contact'>
            <Contact />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Intro;
