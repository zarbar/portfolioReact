import React from 'react';
import './About.css';
import css from './logos/css.svg';
import github from './logos/github.png';
import html from './logos/html.svg';
import js from './logos/js.svg';
import mongo from './logos/mongo.png';
import nodeBlack from './logos/nodejs-new-black2.png';
import react from './logos/react.png';

export default function About() {


    const icons = [{ id: 'css', src: css }, { id: 'html', src: html }, { id: 'js', src: js }, { id: 'mongo', src: mongo }, { src: github, id: 'github' }, { id: 'nodeB', src: nodeBlack }, { id: 'react', src: react }];

    return (
        <div className="container-fluid section" id="aboutSection">
            <h3>Hi There!</h3>
            <div id="aboutDescription">
                <p>

                    I'm a fast and curious learner who is passionate about expanding my knowledge and skill-base.
                    For front-end development I work with HTML5, CSS3 (Bootstrap), Javascript (React and jQuery). For back-end, I use Node.Js (Express.Js). I also work with MySQL and MongoDB databases and am experienced with various testing frameworks and APIs.
                       </p>
                <div id='aboutIcons'>
                    {icons.map(icon => <img className='logoIcon' src={icon.src} alt={icon.id} key={icon.id} />)}
                </div>
                <h3>My Story</h3>
                <p>
                    Having grown-up in London with a background in Anthropology and International Relations, I followed my curiosity for other cultures to Japan, where I lived, travelled and worked for five years. I went from teaching high school English in a remote fishing town to working in the communications department for the School of Science at The University of Tokyo.

                    I worked alongside web developers to create sites for the university, peaking my interest in tech. One of the highlights was using Google Analytics for market research and completing the <a className='aboutAnchor' href='https://analytics.google.com/analytics/academy/' target='_blank' rel='noopener noreferrer'>Google Analytics Academy</a>  courses online.
                    <br /><br />
                    Upon returning to the UK, I again started working in a communications and marketing role alongside web developers and IT professionals. By this point my job-envy was undeniable - I needed to get a piece of the action and unravel the mysteries of their work. In early 2019, I decided to finally take the plunge: start afresh and learn to code!
                    <br /><br />
                    I completed the <a className='aboutAnchor' href='https://www.codecademy.com/learn/paths/web-development' target="_blank" rel="noopener noreferrer"> Codecademy Web Development Course</a> covering HTML5, CSS3, Javascript, Node.Js, APIs, SQL and TDD methods. This included various frameworks and libraries such as Handlebars, React, jQuery, Express, Chai and Mocha. In October 2019, I joined <a className='aboutAnchor' href='https://kodiri.com/bootcamp' target="_blank" rel="noopener noreferrer">Kodiri</a> - a two-month intensive coding bootcamp covering mobile-first UI and UX design with HTML5 and CSS3, Javascript, backend APIs, NodeJs, ExpressJs, MongoDB and cloud deployment with Heroku and ZEIT Now.
                    <br /><br />I've enjoyed every moment of my coding journey so far and am excited for what's to come.<br />👩‍🦱
            </p>
            </div>
        </div>
    )
}
