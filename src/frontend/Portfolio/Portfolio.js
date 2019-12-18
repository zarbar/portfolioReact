import React from 'react';
import './Portfolio.css';
import PortfolioItemDisplay from './PortfolioItemDisplay';
import PortfolioItemList from './PortfolioItemList';

export default function Portfolio() {

    const rickMorty = PortfolioItemList()[0];
    let projectsComingSoon = ['FestiPal App', 'Kodflix', 'Banana Quiz', 'Before and After'];

    let renderProjectsComingSoon = projectsComingSoon.map((project) => {
        return (
            <PortfolioItemDisplay
                comingSoon={true} projectTitle={project} key={project}
            />
        )
    });

    return (
        <div id="portfolioSection" className="container-fluid section">
            <h3>Portfolio</h3>
            <PortfolioItemDisplay
                item={rickMorty}
                comingSoon={false}
            />
            {renderProjectsComingSoon}
        </div>
    )
}