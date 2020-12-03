import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {

  return(
    <div className='hero'
        // style={{marginBottom: window.innerHeight / 2 + 150}}
    >
      <div className='amada-home-text'>
        <h1>amada</h1>
      </div>  
      <div className='hero-image'>
        <img src='http://localhost:5000/public/images/Walnut.png'/>
        <div className='hero-action'>
          <div className='hero-text'>Before settling for a design scheme it's good to take a look at some ideas and possibilities for your space. Gathering inspirational ideas is a great way to boost your creativity, space awareness and determine what it is that your space needs. Head over to our portfolio page to see our completed and in progress designs.</div>
          <Link to='/portfolio'>
              <div className='hero-button'>OUR PROJECTS</div>
          </Link>
        </div>
      </div> 
    </div>
  )
}

export default Hero;