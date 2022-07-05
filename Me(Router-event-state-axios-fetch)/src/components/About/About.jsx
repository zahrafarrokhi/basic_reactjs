import React from 'react';
import profileImage from './avatar.jpeg';

const About = () => (
  <div className="about">
    About me
    <img
      alt="About Me"
      style={{
        width: '6em',height:'6em','border-radius':'50%',
      }}
      src={profileImage}
    />
  </div>
);

export default About;