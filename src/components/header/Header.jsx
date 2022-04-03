import React from 'react'
import './header.css'
import CTA from './CTA'
import './cta.css'
import Typical from 'react-typical';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Sandesh Ghimire</h1>
                <div className='profile-details-role'>
                    {" "}
                    <h2>
                        {" "}
                        <Typical
                            loop={Infinity}
                            steps={[
                                "Blockchain Developer 😎",
                                1000,
                                "Web3 Developer 🐱‍🏍",
                                1000,
                                "Machine Learning IBM Certified Personnel 🦾",
                                1000,
                                "Full Stack Developer 👑",
                                1000,
                                "MERN Stack Developer 🎲",
                                1000,
                            ]}
                        />
                    </h2>
                </div>
                <CTA />
                <HeaderSocials />

                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header