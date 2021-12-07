import React from 'react';
import Particles from 'react-particles-js';

const ParticleParams = {
  particles: {
    line_linked: {
      enable: false,
    },
    number: {
      value: 50,
    },
    size: {
      value: 8,
    },
    move: {
      speed: 2,
      out_mode: 'out',
    },
    color: ['#0b090a', '#161a1d', '#660708', '#a4161a', '#ba181b', '#e5383b', '#b1a7a6', '#d3d3d3', '#f5f3f4', '#ffffff'],
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
