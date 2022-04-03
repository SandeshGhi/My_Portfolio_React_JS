import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { FcOpenedFolder } from 'react-icons/fc'


const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className="about__me-image">
                        <img src={ME} alt="sandesh" />
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>Still seeking for a full time Job.</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>--</small>
                        </article>
                        <article className='about__card'>
                            <FcOpenedFolder className='about__icon' />
                            <h5>Projects</h5>
                            <small>self Projects.</small>
                        </article>
                    </div>
                    <p>
                        Hello, Iam Sandesh Ghimire, BSc CSIT Student. I am a tech enthusiast guy. I have good Knownledge on Blockchain and Web3JS, also issued Udemy Certificate on it. Alongside this, i have MERN Stack projects and this site too is React coded site.
                        Beside, those i also have certificate of Machine Learning with Python [IBM certfied].
                    </p>
                    <a href='#contact'>Hire Me [Click Here]</a>
                </div>
            </div>
        </section>
    )
}

export default About