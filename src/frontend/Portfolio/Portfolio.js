import React from 'react';
import './Portfolio.css';
import PortfolioItemDisplay from './PortfolioItemDisplay';
import PortfolioItemList from './PortfolioItemList';

export default function Portfolio() {

    const rickMorty = PortfolioItemList()[0];
    const festipal = PortfolioItemList()[1];
    const bananaQuiz = PortfolioItemList()[2];
    const kodflix = PortfolioItemList()[3];
    let projectsComingSoon = ['E-commerce website for jewellery designer Purple Zoe'];

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
            <PortfolioItemDisplay
                item={festipal}
                comingSoon={false}
            />
            <PortfolioItemDisplay
                item={bananaQuiz}
                comingSoon={false}
            />

            <PortfolioItemDisplay
                item={kodflix}
                comingSoon={false}
            />
            {renderProjectsComingSoon}
        </div>
    )
}