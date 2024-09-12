import React from 'react';
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div 
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <div className='mobile-menu-container'>
                    <img className='logo' src="./assets/logo2.jpeg" alt="Logo" />
                    <ul>
                        <li><a className="menu-item" href='#home-section'>Home</a></li>
                        <li><a className="menu-item" href='#skills-section'>Skills</a></li>
                        <li><a className="menu-item" href='#projects-section'>Projects</a></li>
                        <li><a className="menu-item" href='#work-section'>Work Experience</a></li>
                        <li><a className="menu-item" href='#contact-section'>Contact Me</a></li>
                        <button className='contact-btn' onClick={() => {}}>Hire Me</button>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MobileNav;
