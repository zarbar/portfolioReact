import rickMorty from './rickMortyScreenshot.png';
import glow from './kodflixScreenshot.png';
import festiPal from './festiPal.png';
import banana from './bananaQuiz.png';
import whereWorld from './whereWorld.png';

export default function PortfolioItemList() {

    return (
        [
            {
                id: 'total-rickall',
                title: 'Total-Rickall: A Total Rip-off Game',
                descriptionWhat: 'A game based on the \'Total Rickall\' episode of Rick & Morty.',
                descriptionHow: 'I used HTML, CSS, Javascript and jQuery. Playing cards pull data from rickandmortyapi.com via GET requests.',
                image: rickMorty,
                website: 'https://total-rickall-two-liard.now.sh/',
                code: 'https://github.com/zarbar/Total-Rickall',
            },
            {
                id: 'festipal',
                title: 'FestiPal',
                descriptionWhat: 'A free tool for music festival organisers. Users answer a series of questions about their event which is then published onto a simple, stylish website.',
                descriptionHow: 'FestiPal uses Google OAuth login that connects to a MongoDB database through Node.js and Express.Js via Axios GET and POST requests. This site was created with React and forms were styled with Bootstrap. As this is deployed using Heroku, please allow a few moments for it to load.',
                image: festiPal,
                website: 'http://zara-festipal.herokuapp.com/',
                code: 'https://github.com/zarbar/festival',
            },
            {
                id: 'banana',
                title: 'Banana Quiz',
                descriptionWhat: 'I created a Buzzfeed-style quiz. Answer 8 questions to discover what humans have been trying to learn since the dawn of time...What type of banana am I?',
                descriptionHow: 'This was built using React and has been deployed using Github Pages.',
                image: banana,
                website: 'https://zarbar.github.io/bananaQuiz/#/',
                code: 'https://github.com/zarbar/bananaQuiz',
            },
            {
                id: 'whereWorld',
                title: 'Where In The World?',
                descriptionWhat: 'Enter a longitude and latitude to generate a unique combinaion of three images representing its what3words location.',
                descriptionHow: 'Built using the What3Words API and the Pixabay API.',
                image: whereWorld,
                website: 'https://zarbar.github.io/WhereInTheWorld/',
                code: 'https://github.com/zarbar/WhereInTheWorld'
            },
            {
                id: 'kodflix',
                title: 'Kodflix',
                descriptionWhat: 'Completed as coursework for coding bootcamp Kodiri. This site renders the posters and synopsis of my favourite TV shows, mimicking the style of Netflix.',
                descriptionHow: 'This was built with React, Node.Js and Express.Js. Show details are served through a static backend file. As this is deployed using Heroku, please allow a few moments for it to load.',
                image: glow,
                website: 'https://zara-kodflix.herokuapp.com/',
                code: 'https://github.com/zarbar/kodflix'
            },

        ])
}