import React from 'react';
import './About.css';
import Button from 'react-bootstrap/Button';

export default function About() {
    return (
        <div className="container-fluid" id="section1">
            <div class="container-fluid center-align-text" id="about-section">
                <h3>Hi There!</h3>
                <p>
                    I began training as a front and back end developer in April 2019. I use HTML 5, CSS (Bootstrap), Javascript (React, Jquery, Handlebars, Node, Express) for front-end development, Node and Express for back-end development and MySQL and MongoDB for databases.<br /><br />

                    My previous experience is in communications and marketing. I was born and raised in London and spent 5 years living and working in Japan.
            </p>
                <span>
                    <Button type="button" className="btn" id="resume-button">
                        Download my resume
                </Button>
                </span>
            </div>
        </div>
    )
}