import React from 'react';
import './Portfolio.css';
import PortfolioItem from './PortfolioItems/PortfolioItem'
import totalRickall from './totalRickall.jpg';

export default function Portfolio() {

    let portfolioItems = [
        {
            id: 'total-rickall',
            title: 'Total-Rickall: A Total Rip-off Game',
            descriptionWhat: 'A simple game I designed based on the \'Total Rickall\' episode of Rick & Morty.',
            descriptionHow: 'I used HTML, CSS, Javascript and jQuery. I pulled data from a public Rick & Morty API.',
            image: totalRickall
        }
    ]

    return (
        <div id="section3" className="container-fluid">
            <div className="container-fluid center-align-text" id="portfolio-box">
                <div className="port-container">
                    <h3>Portfolio</h3>
                    <PortfolioItem
                        id={portfolioItems[0].id}
                        title={portfolioItems[0].title}
                        descriptionWhat={portfolioItems[0].descriptionWhat}
                        descriptionHow={portfolioItems[0].descriptionHow}
                        image={portfolioItems[0].image}
                    />
                </div>
            </div>
        </div>
    )
}