import React from "react";
import { useState, useRef } from "react";
import menuBar from "../../assets/images/menu-bar.svg";
import about from "../../assets/images/about.svg";
import skills from "../../assets/images/skills.svg";
import projects from "../../assets/images/projects.svg";
import contact from "../../assets/images/contact.svg";

function NavBar() {
    const [showLinks, setShowLinks] = useState(false);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    const linkStyles = {
        height: showLinks
        ? `${linksRef.current.getBoundingClientRect().height+30}px`
        : '0px'
    };

    return (
        <nav className="nav">
            <div className='nav-header'>
                <button className='nav-toggle' onClick={toggleLinks}><img src={menuBar} alt="MenuBar" /></button>
            </div>
            <div className='links-container' style={linkStyles}>
                <ul className='links' ref={linksRef}>
                    <li><a href="#about">
                        <img src={about} alt="AboutIcon" className="link-icon" /><span className="link-title">About Me</span>
                    </a></li>
                    <li><a href="#skills">
                        <img src={skills} alt="SkillsIcon" className="link-icon" />Skills
                    </a></li>
                    <li><a href="#projects">
                        <img src={projects} alt="ProjectsIcon" className="link-icon" />Projects
                        </a></li>
                    <li><a href="#contact">
                        <img src={contact} alt="ContactIcon" className="link-icon" />Contact Me
                    </a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;