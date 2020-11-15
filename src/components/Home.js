import React from 'react';

import Hero from './Hero';

function Home() {
    return (
        <main>
            <Hero />
            <div className='home container'>
                <img
                    className='home-image'
                    src='http://localhost:5000/public/images/home-image-1.png'
                    alt='Kitchen 1'
                />
                <p className='home-text right'>
                    Each project is managed from the beginning to the very last touch, with as much or as little input as you desire. This way you can let your creative ideas run wild and simply leave the burden on us. 
                </p>

                <p className='home-text'>
                    Every kitchen is designed and built specifically per client, so no two are ever the same. Bespoke means you don’t need to stick to what is ‘standard’. With thousands of colours and textures, your imagination becomes the limit.
                </p>
                <img
                    className='home-image'
                    src='http://localhost:5000/public/images/home-image-2.png'
                    alt='Kitchen 1'
                />

                <img
                    className='home-image'
                    src='http://localhost:5000/public/images/home-image-1.png'
                    alt='Kitchen 1'
                />
                <p  className='home-text right'>
                    Units are tailored to your unique space to maximise its potential, suit your needs and allow the heart of the home store even more unforgettable moments.
                </p>
            </div>
            
        </main>
    )
}

export default Home;