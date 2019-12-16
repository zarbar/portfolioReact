import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Menu({ menuClick }) {

    return (
        <div className='menu'>


            <div className='menuItems'>
                <a className="menuItem topItem" href="#aboutSection" onClick={() => menuClick()}>About</a>

                <a className="menuItem" href="#portfolioSection" onClick={() => menuClick()}>Portfolio</a>

                <a className="menuItem" href="#contactFormSection" onClick={() => menuClick()}>Contact</a>
                

            </div>



            <div className='menuIcons'>

                <a className="navItem hvr-icon-grow-rotate" id="envelope" href="mailto:zarakletz@yahoo.co.uk" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} className="hvr-icon" />
                </a>

                <a className="navItem hvr-icon-grow-rotate" id="phone" href="tel:07931718353">
                    <FontAwesomeIcon icon={faPhone} className="hvr-icon .phone" />
                </a>

                <a className="navItem hvr-icon-grow-rotate" id="linkedin" href="https://www.linkedin.com/in/zara-kletz" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="hvr-icon" />
                </a>

                <a className="navItem hvr-icon-grow-rotate" id="github" href="https://github.com/zarbar" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="hvr-icon" />
                </a>
            </div>


        </div>


    )
}
