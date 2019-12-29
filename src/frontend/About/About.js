import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="container-fluid section" id="aboutSection">
            <h3>Hi There!</h3>
                        <div id="aboutDescription">
                        <p>
                
                I'm a fast and curious coder who is passionate about expanding my knowledge and skill base.
                For front-end development I work with HTML5, CSS3 (Bootstrap), Javascript (React and Jquery). For back-end, I use Node.Js and Express.Js. I also work with MySQL and MongoDB for databases and am experienced with various testing frameworks and APIs.
               
        </p>
                <h3>My Story</h3>
                <p>
                    Having grown-up in London and with a background in Anthropology and International Relations, I followed my curiosity for other cultures to Japan, where I lived, travelled and worked for five years. I went from teaching high school English in a remote fishing town, to working in the School of Science communications department at The University of Tokyo.

                    It was there I learnt the importance of hard skills and worked alongside web developers to create various websites for the university, peaking my interest in tech. One of the highlights was using Google Analytics on our site, and completing the Google Analytics Academy courses.
                    <br /><br />
                    Upon returning to the UK, I started working in a communications and marketing role alongside web developers and IT professionals. By this point my job-envy was undeniable - I needed to get a piece of the action and unravel the mysteries of their work! In early 2019, I decided to finally take the plunge: start afresh and learn to code. Re-wiring the part of my brain that I had previously dedicated to studying Japanese and my desire to peer over the wall of the inner workings of the tech-world, and oh boy, I've loved every second of it.
                    <br /><br />
                    I completed the <a className='aboutAnchor' href='https://www.codecademy.com/learn/paths/web-development' target="_blank" rel="noopener noreferrer"> Codecademy Web Development Career Path Course</a> covering HTML5, CSS3, Javascript, Node, building and connecting to API's, SQL and TDD methods. This included various frameworks and libraries such as Handlebars, React, jQuery, Express, Chai and Mocha. In October 2019, I joined <a className='aboutAnchor' href='https://kodiri.com/bootcamp' target="_blank" rel="noopener noreferrer">Kodiri</a> - a two-month intensive coding bootcamp covering mobile-first UI and UX design with HTML5 and CSS3, Javascript, backend APIs, NodeJs, ExpressJs, MongoDB and cloud deployment with Heroku and ZEIT Now.
            </p>
            </div>
        </div>
    )
}
