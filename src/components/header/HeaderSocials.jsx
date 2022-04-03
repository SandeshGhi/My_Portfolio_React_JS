import React from 'react'
import './header.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { AiFillTwitterCircle } from 'react-icons/ai'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>

            <a href='https://www.facebook.com/sandesh.ghimire.90' target="_blank"><FaFacebook /></a>
            <a href='https://github.com/SandeshGhi' target="_blank"><FaGithub /></a>
            <a href='https://www.instagram.com/sandesh_sandy1/' target="_blank"><GrInstagram /></a>
            <a href='https://www.linkedin.com/in/sandesh-ghimire-24951a186/' target="_blank"><BsLinkedin /></a>
            <a href='https://twitter.com/Sandesh71742705' target="_blank"><AiFillTwitterCircle /></a>
        </div>
    )
}

export default HeaderSocials