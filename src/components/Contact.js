import React from 'react'

const Contact = () => {
  return (
    <section className='' id='contact'>
      <div className='container'>
        <div className='title'>Contact</div>
        <div className='level'>
          <a
            className='level-item is-centered is-size-6'
            href='https://github.com/nlukjanov'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className="devicon-github-plain"></i>
            <div className='text'>
              github.com<span className='backslash'>/</span>nlukjanov
            </div>
          </a>
          <a
            className='level-item is-centered is-size-6'
            href='https://www.linkedin.com/in/nikita-lukjanov'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin'></i>
            <div className='text'>
              linkedin.com<span className='backslash'>/</span>in
              <span className='backslash'>/</span>nikita-lukjanov
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
