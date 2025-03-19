import React, { useState, useEffect } from 'react';
import './App.css';
import Bio from './components/Bio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
//import Resume from './components/Resume';
import Achievement from './components/Achievement';
// import TextSphere from './components/TextSphere'; 
import Loading from './Loading';
import 'animate.css';
//import RotatingBalls from './components/Rotatingballs';
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : (
        <div className="App glitch">
          <Navbar />
          <ScrollToTop/>
          
          <div className='container'>
            <Bio />
            <Skills />
            <WorkExperience />
            <Projects />
            {/* <Resume /> */}
            <Achievement />
            <ContactMe />
            <Chatbot />
          </div>
          <Footer />
         
        </div>
      )}
    </>
  );
}

export default App;
