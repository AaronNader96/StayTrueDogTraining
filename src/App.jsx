import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DaNavBar from "./components/DaNavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Review from "./components/Review";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <DaNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
