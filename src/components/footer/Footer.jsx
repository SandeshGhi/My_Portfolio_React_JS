import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>SANDESH</a>

            <ul className='premalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href='https://www.facebook.com/sandesh.ghimire.90' target="_blank"><FaFacebook /></a>
                <a href='https://github.com/SandeshGhi' target="_blank"><FaGithub /></a>
                <a href='https://www.instagram.com/sandesh_sandy1/' target="_blank"><GrInstagram /></a>
                <a href='https://www.linkedin.com/in/sandesh-ghimire-24951a186/' target="_blank"><BsLinkedin /></a>
                <a href='https://twitter.com/Sandesh71742705' target="_blank"><AiFillTwitterCircle /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; SANDESH GHIMIRE || All Right Reserved.</small>
            </div>
        </footer>
    )
}

export default Footer