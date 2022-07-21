import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariant = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: .75
    }
  }
}

const childVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000);
  }, [setShowModal]);
  return (
    <motion.div className="container order"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit={{ x: '-100vw', transition: { ease: 'easeInOut', duration: .25 } }}>
      <h2>Thank you for your order :)</h2>
      <motion.p>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;