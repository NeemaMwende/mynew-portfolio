import React, { useState, useEffect } from 'react';
import './Navbar.css';
import angel from "../Images/angel3.png";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = './Neema_Mwende_Resume.pdf';
        link.download = 'Neema_Mwende_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`nav-wrapper ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-content">
                <img className="logo" src={angel} alt="Logo" />
                
                <ul className="desktop-menu">
                    <li><a className="menu-item" href="#home-section" onClick={(e) => { e.preventDefault(); scrollToSection('home-section'); }}>Home</a></li>
                    <li><a className="menu-item" href="#skills-section" onClick={(e) => { e.preventDefault(); scrollToSection('skills-section'); }}>Skills</a></li>
                    <li><a className="menu-item" href="#projects-section" onClick={(e) => { e.preventDefault(); scrollToSection('projects-section'); }}>Projects</a></li>
                    <li><a className="menu-item" href="#work-section" onClick={(e) => { e.preventDefault(); scrollToSection('work-section'); }}>Work Experience</a></li>
                    <li><a className="menu-item" href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>Certificates</a></li>
                </ul>
                
                <div className="nav-buttons">
                    <button className="resume-btn" onClick={handleDownloadCV} title="Download Resume">Resume</button>
                    <button className="contact-btn" onClick={() => scrollToSection('contact-section')}>Hire Me</button>
                </div>
                
                <button className="menu-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
                <div className='mobile-menu-container'>
                    <img className='logo' src={angel} alt="Logo" />
                    <ul>
                        <li><a className="menu-item" href="#home-section" onClick={(e) => { e.preventDefault(); scrollToSection('home-section'); }}>Home</a></li>
                        <li><a className="menu-item" href="#skills-section" onClick={(e) => { e.preventDefault(); scrollToSection('skills-section'); }}>Skills</a></li>
                        <li><a className="menu-item" href="#projects-section" onClick={(e) => { e.preventDefault(); scrollToSection('projects-section'); }}>Projects</a></li>
                        <li><a className="menu-item" href="#work-section" onClick={(e) => { e.preventDefault(); scrollToSection('work-section'); }}>Work Experience</a></li>
                        <li><a className="menu-item" href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>Certificates</a></li>
                        <li><a className="menu-item" href="#contact-section" onClick={(e) => { e.preventDefault(); scrollToSection('contact-section'); }}>Contact Me</a></li>
                    </ul>
                    <div className="mobile-buttons">
                        <button className="resume-btn" onClick={handleDownloadCV} title="Download Resume">Resume</button>
                        <button className='contact-btn' onClick={() => scrollToSection('contact-section')}>Hire Me</button>
                    </div>
                </div>
                <div className="backdrop" onClick={toggleMenu}></div>
            </div>
        </div>
    );
};

export default Navbar;