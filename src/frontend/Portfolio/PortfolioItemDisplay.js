import React from 'react';
import './Portfolio.css';

export default function PortfolioItem(props) {

    const [noHover] = React.useState('projectGrid');

    let item = props.item;
    if (props.comingSoon) {
        return (
            <div className="projectGrid comingSoon">
                <div className='itemOne projectTitleSoon' >
                    {props.projectTitle}
                </div>
                <div className='itemTwo'>
                    <p><em>coming real soon!</em></p>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className={noHover}>
                <div className="projectDisplay itemOne">
                    <img src={item.image} alt={props.id} className='portfolioImage' />
                </div>

                <div className='itemTwo'>
                    <div className='flexItem'>
                        <div className='projectTitle'>
                            {item.title}
                        </div>
                        <p>{item.descriptionWhat}</p>
                        <p>{item.descriptionHow}</p>
                    </div>

                    <div className='flexItem'>
                        <div className="buttonBox">
                            <a
                                className="zara-button-red"
                                href={item.website} target="_blank" rel="noopener noreferrer">
                                Visit Website
                        </a>

                            <a
                                className="zara-button-red"
                                href={item.code} target="_blank" rel="noopener noreferrer">
                                View Code
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}