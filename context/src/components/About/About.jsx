import React from 'react';
import profileImage from './profile.webp';

const About = () => (
  <div className="about">
    About me
    <img
      alt="About Me"
      style={{
        width: '100px',
        height:'100px'
      }}
      src={profileImage}
    />
  </div>
);

export default About;