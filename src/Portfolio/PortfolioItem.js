import React from 'react';
import './Portfolio.css';
import Button from 'react-bootstrap/Button';

export default function PortfolioItem(props) {
    return (
        <div className="container-fluid container-life">
            <img src={props.imageDesktop} alt={props.id} className="image-life" />
            <div className="overlay-life">
                <div className="text-life">
                    <strong>
                        <u>{props.title}</u>
                    </strong>
                    <br /><br />
                    {props.descriptionWhat}<br /><br />
                    {props.descriptionHow}
                    <br />

                    <div className="buttonBox">
                        <Button type="button"
                            id="zara-button-red"
                            href="https://total-rickall-two-liard.now.sh/">
                            Visit Website
                        </Button>

                        <Button type="button"
                            className="btn"
                            id="zara-button-red"
                            href="https://github.com/zarbar/Total-Rickall">
                            View Code
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}