import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DaNavBar = () => {
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-customBlue shadow-md">
      <div className="flex items-center">
        <img src="assets/logo.jpg" alt="Logo" className="mr-2 w-8 h-8" />
        <Link to="/" className="text-2xl font-bold text-white">
          Stay True Dog Training
        </Link>
      </div>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        className="flex space-x-4 mt-4 md:mt-0"
      >
        <motion.li
          variants={navbarVariants}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            to="/"
            className="text-white hover:underline hover:bg-blue-900 rounded-full px-4 py-2"
          >
            Home
          </Link>
        </motion.li>
        <motion.li
          variants={navbarVariants}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            to="/about"
            className="text-white hover:underline hover:bg-blue-900 rounded-full px-4 py-2"
          >
            About
          </Link>
        </motion.li>
        <motion.li
          variants={navbarVariants}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            to="/review"
            className="text-white hover:underline hover:bg-blue-900 rounded-full px-4 py-2"
          >
            Reviews
          </Link>
        </motion.li>
        <motion.li
          variants={navbarVariants}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            to="/contact"
            className="text-white hover:underline hover:bg-blue-900 rounded-full px-4 py-2"
          >
            Contact
          </Link>
        </motion.li>
      </motion.ul>
    </nav>
  );
};

export default DaNavBar;
