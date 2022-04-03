import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Responsive</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Reactive</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>User Friendly</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Scalable</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Updatable</p>
                        </li>
                    </ul>
                </article>
                {/* End of Web Development */}
                <article className='service'>
                    <div className="service__head">
                        <h3>Blockchain</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Web3</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Crypto Stuffs</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>IPFS</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Solidity</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Dapps</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Distributed System</p>
                        </li>
                    </ul>
                </article>
                {/* End of Blockchain */}
                <article className='service'>
                    <div className="service__head">
                        <h3>Machine Learning</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Predictions</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Identification</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Algorithms</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>OpenCV</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Big Data</p>
                        </li>
                    </ul>
                </article>
                {/* End of Machine Learning */}
            </div>
        </section>
    )
}

export default Services