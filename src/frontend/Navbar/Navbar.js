import React from 'react';
import './Navbar.css';
import Menu from '../Menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';


function Nav(props) {
    const [showMenu, setShowMenu] = React.useState('menuClosed');

    function menuClick() {
        showMenu === 'menuClosed' ? setShowMenu('menuOpen') :
            setShowMenu('menuClosed');
    }

    React.useEffect(() => {
        props.toggleMenu(showMenu);
        // eslint-disable-next-line
    }, [showMenu])

    function headerClick() {
        if (showMenu === 'menuOpen') {
            setShowMenu('menuClosed');
            props.toggleMenu(showMenu);
        }
    }

    return (
        <>
            <div id="navBarList">
                <a className="navItem" id="brand" href="#landing-page" onClick={() => headerClick()}>
                    <h5>Zara Kletz</h5></a>

                <a className="navItem" id="navAbout" href="#aboutSection">About</a>

                <a className="navItem" id="navPortfolio" href="#portfolioSection">
                    Portfolio</a>

                <a className="navItem" id="navContact" href="#contactFormSection">Contact</a>

                <span className="navBox">

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

                </span>

                <button className="hvr-icon-grow-rotate" id="bars" onClick={() => { menuClick(); }}>
                    <FontAwesomeIcon icon={faBars} className="hvr-icon" />
                </button>
            </div >
            <div id='showMenu' className={showMenu}>
                <Menu menuClick={menuClick} />
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        menu: state.menu
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenu: (showMenu) => {
            dispatch({ type: 'TOGGLE_MENU', menu: showMenu })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)