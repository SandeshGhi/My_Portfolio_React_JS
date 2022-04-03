import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Nepal Coin a Crowd Funding Dapp.',
        github: 'https://github.com/SandeshGhi/Ethereum_Solidity_Web3_JS',
        demo: ''
    },
    {
        id: 2,
        image: IMG2,
        title: 'Eth_Smart_Contract',
        github: 'https://github.com/SandeshGhi/Eth_Smart_Contract_CompileTestDeploy',
        demo: ''
    },
    {
        id: 3,
        image: IMG3,
        title: 'Hand Tracking OpenCV',
        github: 'https://github.com/SandeshGhi/HandTrackingProject-using-CV',
        demo: ''
    },
    {
        id: 4,
        image: IMG4,
        title: 'Django Food App',
        github: 'https://github.com/SandeshGhi/FoodApp',
        demo: ''
    },
    {
        id: 5,
        image: IMG5,
        title: 'Real State Hosing Price Predictor',
        github: 'https://github.com/SandeshGhi/Real-Estate-Housing-Price-Predictor',
        demo: ''
    },
    {
        id: 6,
        image: IMG6,
        title: 'Simple Youtube App[ReactJS]',
        github: 'https://github.com/SandeshGhi/YoutubeAppWithReactJS',
        demo: ''
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Projects</h5>
            <h2>Portfolio</h2>

            <div className="conatiner portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn btn-primary' target='_blank'>Github</a>
                                    <a href={demo} className='btn' target='_blank' style={{ textDecorationLine: 'line-through' }}>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio