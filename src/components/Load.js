import React, { useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import aIcon from '../a-icon.svg';
import { useHistory } from 'react-router-dom';

function LoadScreen() {
  setTimeout(() => {
    sequence()
  }, 1500);

  const transition = { duration: .8, ease: [0.8, 0, 0.24, 1] }

  const [lettersAnimated, setLettersAnimated] = useState(false);


  const iconControls = useAnimation();
  const letterControls = useAnimation();
  const textControls = useAnimation();
  const imageControls = useAnimation();

  const iconVariants = {
    move1: {
      x: '-9vw',
      rotate: -90
    },
    move2: {
      x: '8.1vw',
      rotate: 360
    },
    hidden: {
      opacity: 0
    }
  }

  const letterVariants = {
    before: {
      opacity: 0,
      y: 50,
      rotate: -45
    },
    after: {
      opacity: 1,
      y: 0,
      rotate: 0
    }
  }

  const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.08 } },
  }

  const amadaStringArr = Array.from('amada');

  const sequence = async () => {
    await iconControls.start('move1');
    letterControls.start('after');
    await iconControls.start('move2');
    await iconControls.start('hidden');
    setLettersAnimated(true);
    await textControls.start({ fontSize: '20vw' });
    await imageControls.start({ y: window.innerHeight / 2 });
    history.push('/home'); // go to /home
  }

  const history = useHistory();

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div className='load-container'
        animate={{opacity: 1}}
      >
        <div className='load-wrapper'>
          <motion.div className='load-icon'
            variants={ iconVariants }
            animate={ iconControls }
            transition={{ duration: .4, ease: [0.37, 0, 0.63, 1] }}
          >
            <img src={ aIcon } />
          </motion.div>
          <motion.div className='load-text'
            variants={ containerVariants }
            initial={ 'before' }
            animate={ letterControls }
          >
            {
            lettersAnimated // after individual divs have animated
              ? (
                  <motion.div className='amada-home-text'>
                    <motion.h1
                        initial={{ fontSize: '5vw' }}
                        animate={ textControls }
                        transition={ transition }
                    >amada</motion.h1>
                    <motion.div
                        className='hero-image'
                        initial={ { y: window.innerHeight } }
                        animate={ imageControls }
                        transition={ transition }
                    >
                      <img src='http://localhost:5000/public/images/Walnut.png'/>
                    </motion.div>
                  </motion.div>   
              )
              : (
                amadaStringArr.map((letter, index) => (
                  <motion.div
                  key={ index }
                  className='load-text-letter'
                  variants={ letterVariants }
                  initial={ 'before' }
                  transition={{duration: .2, ease: [0.8, 0, 0.24, 1]}}
                >
                  { letter }
                </motion.div>
                ))
              )
            }
          </motion.div>
        </div>
      </motion.div>    
    </AnimatePresence>
    
  )
}

export default LoadScreen;