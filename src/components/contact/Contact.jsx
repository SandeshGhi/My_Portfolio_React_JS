import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ehk204d', 'template_i2jetvj', form.current, 'GApWgzC3NSVifeP4y')
        e.target.reset()
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>sndshghimire123@gmail.com</h5>
                        <a href='mailto:sndshghimire123@gmail.com' target='_blank'>Send a Mail</a>
                    </article>
                    <article className='contact__option'>
                        <FaFacebook className='contact__option-icon' />
                        <h4>Facebook</h4>
                        <h5>Sandesh Ghimire</h5>
                        <a href='https://m.me/sandesh.ghimire.90' target='_blank'>Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsLinkedin className='contact__option-icon' />
                        <h4>Linkedin</h4>
                        <h5>Sandesh Ghimire</h5>
                        <a href='https://www.linkedin.com/in/sandesh-ghimire-24951a186/' target='_blank'>Send a Message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Name Here' required />
                    <input type='email' name='email' placeholder='Your Email Here' required />
                    <textarea name='name' rows='7' placeholder='Your Message' required />
                    <button type='sunmit' className='btn btn-primary' onClick={() => { alert('success'); }}>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact