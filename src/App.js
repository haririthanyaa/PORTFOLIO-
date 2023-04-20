import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from '../src/components/Pre';
import Home from './pages/Home.js';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const handleMouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <motion.div
        className="cursor"
        variants={cursorVariants}
        animate="default"
      />
      <Router>
        <Preloader isLoading={isLoading} />
        <div className="App" id={isLoading ? "no-scroll" : "scroll"}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
