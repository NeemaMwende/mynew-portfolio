
import React from 'react';
import "./Bio.css";
import angel from '../Images/me.png';
import SlidingCard from './SlidingCard';
import { useScroll, animated } from '@react-spring/web';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'

const Bio = () => {
  const { scrollYProgress } = useScroll();
  const [text] = useTypewriter({
    words: ["MERN Developer.", "Full Stack Developer.", "JavaScript Developer", "BackEnd Developer", "Python Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
    Cursor
  });

  return (
    <section className='hero-container' id="home-section">
        <SlidingCard>
        <div className='hero-content slide-card'>
          <h2>Building Digital <br/> <span>Experiences </span>That Inspire</h2>
          <div className='flex flex-col gap-5'>
            <div>
              <h1 className='text-6xl font-bold text-white'>
                Hi, I'm {''}
                <span className='text-designColor capitalize'>Neema Mwende</span>
              </h1>
              <h3>a <span>{text}</span></h3>
              {/* <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor='#ff014f'
                /> */}
            </div>
          </div>
          <p>Passionate Full Stack Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions</p>
        </div>
        </SlidingCard>
        <SlidingCard >
        <div className='hero-img slide-card'>
          <img src={angel} alt="Profile" className='profile-img' />
        </div>
        </SlidingCard>
    </section>
  );
};

export default Bio;
