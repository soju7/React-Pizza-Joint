import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const buttonVariant = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition:{
      yoyo:Infinity,
      duration:.4
    }
  }
}

const Home = () => {
  return (
    <div className="home container">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .5, duration: 5 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button variants={buttonVariant} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home;