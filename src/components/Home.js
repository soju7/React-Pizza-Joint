import React from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home container">
      <motion.h2 
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{delay:.5,duration:5}}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
        whileHover={{scale:1.1}}>
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home;