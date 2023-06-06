import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Logo Animation */}
          <div className="flex flex-col items-center md:flex-row md:justify-center md:items-center mb-8">
            <motion.img
              src="assets/logo.jpg"
              alt="Logo"
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-48 h-48 md:w-64 md:h-64 mr-0 md:mr-6 mb-6 md:mb-0"
            />
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-6 text-center text-gray-800"
            >
              Welcome to Stay True Dog Training
            </motion.h1>
          </div>

          {/* Main Content */}
          <div className="md:flex md:justify-center md:space-x-8">
            <div className="md:w-2/3 md:pr-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg mb-6 text-gray-700"
              >
                At Stay True Dog Training, we understand that your pup is an
                important part of your family. We are passionate about building
                strong and harmonious relationships between dogs and their
                owners through effective training techniques and reinforcement.
                Our goal is to equip both you and your dog with the necessary
                skills to lead a happy and fulfilling life together.
              </motion.p>
              <div className="flex justify-center mb-8">
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

          {/* Image Gallery */}
          <div className="flex justify-center mt-8">
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img src="assets/img1.jpeg" alt="Image 1" className="w-full" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src="assets/img2.jpeg" alt="Image 2" className="w-full" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="assets/puppies2.jpg"
                  alt="Image 3"
                  className="w-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="assets/training.png"
                  alt="Image 4"
                  className="w-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="assets/training2.png"
                  alt="Image 5"
                  className="w-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="assets/training3.jpg"
                  alt="Image 6"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
