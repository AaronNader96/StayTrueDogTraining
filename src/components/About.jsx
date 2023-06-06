import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="h-screen bg-gray-100">
      <nav className="bg-white shadow">{/* Navbar content */}</nav>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Left Images */}
            <div className="md:w-1/3 mb-4 md:mb-0">
              <img
                src="assets/img1.jpeg"
                alt="Image 1"
                className="rounded-md w-full"
              />
              <img
                src="assets/img2.jpeg"
                alt="Image 2"
                className="rounded-md w-full mt-4"
              />
            </div>
            {/* Main Content */}
            <div className="md:w-2/3">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-4 text-gray-800"
              >
                Meet the Owner
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4 text-gray-700"
              >
                Hi, I'm Luke. Ever since attending an obedience class for one of
                our corgis and seeing how a little time and effort can change
                the dynamic of the relationship with your dog, I have been
                obsessed with training. With the help of my friend and mentor, I
                started learning how to work with dogs and ended up training our
                other corgi entirely.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-4 text-gray-700"
              >
                I want to give others the same enjoyment that we now experience
                on a daily basis by teaching them how to interact and engage
                with their dogs by providing structure, accountability, and fun.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-4 text-gray-700"
              >
                Contact us today to schedule a free consultation and take the
                first step towards a well-behaved and happy companion!
              </motion.p>
              <div className="flex justify-center">
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="px-6 py-3 bg-customBlue text-white rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Link to="/contact">Schedule a free consultation</Link>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
