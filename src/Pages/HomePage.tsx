import React from 'react';
import '../Styles/HomePage.css'

const HomePage: React.FC = () => {
  return (
    <div id='Home'>
      <h1 className='Home-Welcome'>Welcome to My Portfolio</h1>
      <div className='Home-About'>
        <p className='About'>This is a paragraph about myself. 
        <br />I want to see how it looks.
        <br />So far its looking good
        </p>
      </div>
    </div>
  );
};

export default HomePage;
