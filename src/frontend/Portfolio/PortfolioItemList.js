import totalRickall from './totalRickall.jpg';
import totalRickallMobile from './totalRickallMini.jpg';
import rickMorty from './RickMorty.jpg';

export default function PortfolioItemList() {

    return (
        [
            {
                id: 'total-rickall',
                title: 'Total-Rickall: A Total Rip-off Game',
                descriptionWhat: 'A simple game I designed based on the \'Total Rickall\' episode of Rick & Morty.',
                descriptionHow: 'I used HTML, CSS, Javascript and jQuery. I pulled data from a public Rick & Morty API.',
                image: rickMorty,
                imageDesktop: totalRickall,
                imageMobile: totalRickallMobile
            }
        ])
}