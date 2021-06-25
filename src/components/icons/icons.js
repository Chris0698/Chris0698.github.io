import React from 'react';
import IconLinkedin from "../icons/linkedInIcon"
import IconGitHub from "../icons/githubIcon"

const Icon = ({ name }) => {
  switch(name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'LinkedIn':
      return <IconLinkedin />;
    default:
      return "";
  }
};

export default Icon;