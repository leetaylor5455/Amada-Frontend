import React from 'react';

function Hero() {
  return(
    <div className='hero'>
      <div className='hero-behind'
        style={{
          background: `url('http://localhost:5000/public/images/hero.png')`,
          height: '512px',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'top'
        }}
      >

      </div>

      <div className='at-amada-container'>
        <div className='at-amada-image'>
          <img
            src={'http://localhost:5000/public/images/atamada.png'}
            style={{
              width: '563px',
              height: '166px',
            }}
            alt='At Amada'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;