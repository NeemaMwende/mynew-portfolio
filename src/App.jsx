import React, { useState, useEffect } from 'react';
import './App.css';
import Bio from './components/Bio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Resume from './components/Resume';
import Achievement from './components/Achievement';
import TextSphere from './components/TextSphere'; // Fixed typo
import Loading from './Loading'; // Import the Loading component
import 'animate.css';
//import RotatingBalls from './components/Rotatingballs';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data or other async tasks)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : (
        <div className="App glitch">
          <Navbar />
          <div className='container'>
            <Bio />
            <Skills />
            <WorkExperience />
            <Projects />
            <Resume />
            <Achievement />
            <TextSphere />
            <ContactMe />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
