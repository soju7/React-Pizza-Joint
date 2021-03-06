import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

const modal = {
    visible: { y: 200 },
    hidden: { y: '100vh' },
}

const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div className="modal"
                        variants={modal}
                    >
                        <p>Want to make another Pizza?</p>
                        <Link to="/">
                            <button>Start Again</button>
                        </Link>
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;