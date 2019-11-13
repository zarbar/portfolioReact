import React from 'react';
import '../Portfolio.css';
import Button from 'react-bootstrap/Button';

export default function PortfolioItem(props) {
    return (
        <div className="container-fluid container-life">
            <img src={props.image} alt={props.id} className="image-life" />
            {/* <img src="images/totalRickall500.jpg" alt="Total Rickall" id="rickmini" className="image-life" /> */}
            <div className="overlay-life">
                <div className="text-life">
                    <strong>
                        <u>{props.title}</u>
                    </strong>
                    <br /><br />
                    A simple game I designed based on the 'Total Rickall' episode of Rick & Morty.<br /><br />
                    I used HTML, CSS, Javascript and jQuery. I pulled data from a public Rick & Morty API.
                        <br />

                    <div id="button-life-port">

                        <Button id="button-life" type="button" className="btn"
                            href="https://zarbar.github.io/Total-Rickall/">Visit
                                    Website</Button>

                        <Button id="button-life" type="button" className="btn"
                            href="https://github.com/zarbar/Total-Rickall">View
                                    Code</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}