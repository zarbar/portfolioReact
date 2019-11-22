import React from 'react';
import './Portfolio.css';
import PortfolioItem from './PortfolioItem';
import totalRickall from './totalRickall.jpg';
import totalRickallMobile from './totalRickallMini.jpg';

export default function Portfolio() {

    let portfolioItems = [
        {
            id: 'total-rickall',
            title: 'Total-Rickall: A Total Rip-off Game',
            descriptionWhat: 'A simple game I designed based on the \'Total Rickall\' episode of Rick & Morty.',
            descriptionHow: 'I used HTML, CSS, Javascript and jQuery. I pulled data from a public Rick & Morty API.',
            imageDesktop: totalRickall,
            imageMobile: totalRickallMobile
        }
    ]

    return (
        <div id="portfolioSection" className="container-fluid section">
            <div className="container-fluid center-align-text titleText" id="portfolio-box">
                <div className="port-container">
                    <h3>Portfolio</h3>
                    <PortfolioItem
                        id={portfolioItems[0].id}
                        title={portfolioItems[0].title}
                        descriptionWhat={portfolioItems[0].descriptionWhat}
                        descriptionHow={portfolioItems[0].descriptionHow}
                        imageDesktop={portfolioItems[0].imageDesktop}
                        imageMobile={portfolioItems[0].imageMobile}
                    />
                </div>
            </div>
        </div>
    )
}