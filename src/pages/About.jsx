import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="main-content">
      <Helmet>
        <title>About Us - NY Times Clone</title>
      </Helmet>
      <h1>About Us</h1>
      <p>This is a clone of the New York Times created for educational purposes.</p>
    </div>
  );
};

export default About;
