import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {

    return (
        <div id="navBarList">
            <span className="navBox"><a className="navItem" id="brand" href="/">Zara Kletz</a>
                <a className="navItem" id="navAbout" href="#aboutSection">About</a>
                <a className="navItem" href="#portfolioSection">Portfolio</a>
                <a className="navItem" href="#contactFormSection">Contact</a>
            </span>

            <span className="navBox">
                <a className="navItem" href="mailto:zarakletz@yahoo.co.uk" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a className="navItem" href="tel:07931718353">
                    <FontAwesomeIcon icon={faPhone} />
                </a>
                <a className="navItem" href="https://www.linkedin.com/in/zara-kletz" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className="navItem" href="https://github.com/zarbar" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </span>
        </div >
    )
}