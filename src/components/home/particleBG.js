import React from 'react';
import Particles from 'react-particles-js';

const ParticleParams = {
  particles: {
    line_linked: {
      enable: false,
    },
    number: {
      value: 100,
    },
    size: {
      value: 8,
    },
    move: {
      speed: 1,
      out_mode: 'out',
    },
    color: ['#f94144', '#f3722c', '#f8961e', '#f9844a', '#f9c74f', '#90be6d', '#43aa8b', '#4d908e', '#577590', '#277da1'],
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};

const ParticleBG = () => {
  return (
    <Particles className="particles" params={ParticleParams} />
  );
};

export default ParticleBG;
