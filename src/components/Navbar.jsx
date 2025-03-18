import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav';
import angel from "../Images/angel3.png";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const handleNavItemClick = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setOpenMenu(false);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} onNavItemClick={handleNavItemClick} />
            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <img className='logo' src={angel} alt='Logo' />
                    <ul>
                        <li><a className="menu-item" href="#home-section" onClick={(e) => { e.preventDefault(); handleNavItemClick('home-section'); }}>Home</a></li>
                        <li><a className="menu-item" href="#skills-section" onClick={(e) => { e.preventDefault(); handleNavItemClick('skills-section'); }}>Skills</a></li>
                        <li><a className="menu-item" href="#work-section" onClick={(e) => { e.preventDefault(); handleNavItemClick('work-section'); }}>Experience</a></li>
                        <li><a className="menu-item" href="#projects-section" onClick={(e) => { e.preventDefault(); handleNavItemClick('projects-section'); }}>Projects</a></li>
                        <li><a className="menu-item" href="#resume-section" onClick={(e) => { e.preventDefault(); handleNavItemClick('resume-section'); }}>Resume</a></li>
                        <li><a className="menu-item" href="#portfolio" onClick={(e) => { e.preventDefault(); handleNavItemClick('portfolio'); }}>Certificates</a></li>
                        <li><a className="menu-item" href="#contact-section" onClick={(e) => { e.preventDefault(); handleNavItemClick('contact-section'); }}>Contact</a></li>
                    </ul>
                    <div className='btns'>
                        <button className='contact-btn' onClick={() => handleNavItemClick('contact-section')}>Hire Me</button>
                    </div>
                    <button className='menu-btn' onClick={toggleMenu}>
                        <span className="material-symbols-outlined" style={{ fontSize: "1.8rem" }}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
                <div id="particles-js" className="particles-js"></div>
            </nav>
        </>
    );
};

export default Navbar;
