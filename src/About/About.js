import React from 'react';
import './About.css';
import Button from 'react-bootstrap/Button';

export default function About() {
    return (
        <div className="container-fluid" id="section1">
            <div class="container-fluid center-align-text" id="about-section">
                <h3>Hi There!</h3>
                <p>
                    I began training as a front and back end developer in April 2019.
                My previous experience is in communications and marketing.<br /><br />

                    Working alongside web developers made me curious about their work. After extensive
                    research
                    and
                    training, which involved an online course with Codecamdemy, and a bootcamp with
                    Kodiri, I
                    finally
                decided to become one!<br /><br />

                    I also lived in Japan for 5 years which was really fun. Studying Japanese gave me
                    the
                    confidence to
                    start learn programming languages.
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