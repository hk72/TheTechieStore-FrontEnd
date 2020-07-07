import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const About = (props) => {

  return(
    <div className = "minHeight">
      <div className = 'aboutImg'>
        <img src = 'TheTechie.jpg' alt = 'TheTechie' />
      </div>
      <div className = 'w80'>
        <p>
          I created this website with the hope of improving my NodeJS and MongoDB understanding.
          After taking an extended break from Web Development to focus on my academics, this project
          has proven to be a fun way to return to the Web Development world. I hope you enjoy it!
        </p>
      </div>
    </div>
  )
}

export default About
