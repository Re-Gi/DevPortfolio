import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer-container'>
      <a href="https://github.com/Re-Gi" target="_blank"><FontAwesomeIcon className='brand-icons' icon={faGithub} size="3x" /></a>
      <a href="https://www.linkedin.com/in/rebecca-girndt-6509a325a/" target="_blank"><FontAwesomeIcon className='brand-icons' icon={faLinkedin} size="3x" /></a>
      <a href="https://stackoverflow.com/users/21422954/rebecca-girndt" target="_blank"><FontAwesomeIcon className='brand-icons' icon={faStackOverflow} size="3x" /></a>
    </div>
  );
}