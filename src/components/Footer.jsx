import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-customBlue text-white">
      <div className="container mx-auto py-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Stay True Dog Training. Website
          developed by{" "}
          <a href="https://aaronnader.com" className="underline">
            Aaron Nader
          </a>
          .
        </p>
        <div className="flex mt-4 md:mt-0 justify-center md:justify-end">
          <a
            href="https://www.instagram.com/staytruedogtraining"
            className="text-white text-lg mr-4 hover:text-blue-400 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@staytruedogtraining"
            className="text-white text-lg hover:text-blue-400 transition-colors duration-300"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
