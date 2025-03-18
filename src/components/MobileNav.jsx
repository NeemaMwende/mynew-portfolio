import React from 'react';
import "./MobileNav.css";
import angel from "../Images/angel3.png"; 

const MobileNav = ({ isOpen, toggleMenu, onNavItemClick }) => {
    const handleNavItemClick = (sectionId) => {
        onNavItemClick(sectionId);
        toggleMenu();
    };

    return (
        <>
            <div 
                className={`mobile-menu ${isOpen ? "active" : ""}`}
            >
                <div className='mobile-menu-container'>
                    <img className='logo' src={angel} alt="Logo" />
                    <ul>
                        <li><a className="menu-item" href="#home-section" onClick={(e) => { e.preventDefault(); handleNavItemClick('home-section'); }}>Home</a></li>
                        <li><a className="menu-item" href="#skills-section" onClick={(e) => { e.preventDefault(); handleNavItemClick('skills-section'); }}>Skills</a></li>
                        <li><a className="menu-item" href="#projects-section" onClick={(e) => { e.preventDefault(); handleNavItemClick('projects-section'); }}>Projects</a></li>
                        <li><a className="menu-item" href="#work-section" onClick={(e) => { e.preventDefault(); handleNavItemClick('work-section'); }}>Work Experience</a></li>
                        <li><a className="menu-item" href="#resume-section" onClick={(e) => { e.preventDefault(); handleNavItemClick('resume-section'); }}>Resume</a></li>
                        <li><a className="menu-item" href="#portfolio" onClick={(e) => { e.preventDefault(); handleNavItemClick('portfolio'); }}>Certificates</a></li>
                        <li><a className="menu-item" href="#contact-section" onClick={(e) => { e.preventDefault(); handleNavItemClick('contact-section'); }}>Contact Me</a></li>
                    </ul>
                    <button className='contact-btn' onClick={() => handleNavItemClick('contact-section')}>Hire Me</button>
                </div>
                <div className="backdrop" onClick={toggleMenu}></div>
            </div>
        </>
    );
};

export default MobileNav;