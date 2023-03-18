import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import resume from '../assets/Resume-RebeccaGirndt.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a href={resume} download>
      <h2><FontAwesomeIcon icon={faFileArrowDown} size="1x" /> Download Rebecca's Resume</h2>
      </a>
    </div>
  );
}