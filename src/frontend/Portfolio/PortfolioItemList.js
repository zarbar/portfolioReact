import rickMorty from './rickMortyScreenshot.png';
import glow from './kodflixScreenshot.png';

export default function PortfolioItemList() {

    return (
        [
            {
                id: 'total-rickall',
                title: 'Total-Rickall: A Total Rip-off Game',
                descriptionWhat: 'A simple game I designed based on the \'Total Rickall\' episode of Rick & Morty.',
                descriptionHow: 'I used HTML, CSS, Javascript and jQuery. I pulled data from a public Rick & Morty API.',
                image: rickMorty,
                website: 'https://total-rickall-two-liard.now.sh/',
                code: 'https://github.com/zarbar/Total-Rickall',
            },
            {
                id: 'kodflix',
                title: 'Kodflix',
                descriptionWhat: 'Based on Netflix, I created a simple React site that renders the poster and synopsis of some of my favourite shows. On this project I experimented with serving static files through Express. As this is deployed with Heroku, please allow a few moments for it to open.',
                image: glow,
                website: 'https://zara-kodflix.herokuapp.com/',
                code: 'https://github.com/zarbar/kodflix'
            },

        ])
}