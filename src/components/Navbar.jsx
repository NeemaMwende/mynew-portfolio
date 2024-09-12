import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav';
import angel from "../Images/angel3.png";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <img className='logo' src={angel} alt='Logo' />
                    <ul>
                        <li><a className="menu-item" href='#home-section'>Home</a></li>
                        <li><a className="menu-item" href='#skills-section'>Skills</a></li>
                        <li><a className="menu-item" href='#work-section'>Experience</a></li>
                        <li><a className="menu-item" href='#projects-section'>Projects</a></li>
                        <li><a className="menu-item" href='#resume-section'>Resume</a></li>
                        <li><a className="menu-item" href='#portfolio'>Certificates</a></li>
                        <li><a className="menu-item" href='#contact-section'>Contact</a></li>
                    </ul>
                    <div className='btns'>
                        <button className='contact-btn' onClick={scrollToContact}>Hire Me</button>
                    </div>
                    <button className='menu-btn' onClick={toggleMenu}>
                        <span className={"material-symbols-outlined"} style={{ fontSize: "1.8rem" }}>
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
