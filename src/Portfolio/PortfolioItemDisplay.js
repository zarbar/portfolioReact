import React from 'react';
import './Portfolio.css';
import Button from 'react-bootstrap/Button';

export default function PortfolioItem(props) {

    let item = props.item;
    if (props.comingSoon) {
        return (
            <div className="projectGrid comingSoon">
                <div className='itemOne projectTitle' >
                    {props.projectTitle}
                </div>
                <div className='itemTwo'>
                    <p><em>coming soon</em></p>
                </div>
            </div>
        )
    }


    return (
        <>
            <div className="projectGrid">

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
        </>
    );
}