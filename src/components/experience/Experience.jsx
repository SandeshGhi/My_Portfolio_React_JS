import React from 'react'
import './experience.css'
import { TiHtml5 } from 'react-icons/ti'
import { SiCss3 } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiDjango } from 'react-icons/si'
import { DiMongodb } from 'react-icons/di'
import { SiBlockchaindotcom } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { IoLogoPython } from 'react-icons/io'
import { SiProbot } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { SiOpencv } from 'react-icons/si'
import { SiSolidity } from 'react-icons/si'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>My Skills</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className="experience__frontend">
                    <h3>SkillSet 1</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <TiHtml5 className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiCss3 className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiReact className='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <IoLogoNodejs className='experience__details-icon' />
                            <div>
                                <h4>NodeJS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiDjango className='experience__details-icon' />
                            <div>
                                <h4>Django</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiOpencv className='experience__details-icon' />
                            <div>
                                <h4>OpenCV</h4>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>SkillSet 2</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <SiBlockchaindotcom className='experience__details-icon' />
                            <div>
                                <h4>Blockchain || Web3js</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <IoLogoPython className='experience__details-icon' />
                            <div>
                                <h4>Python</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiProbot className='experience__details-icon' />
                            <div>
                                <h4>Machine Learning</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <DiMongodb className='experience__details-icon' />
                            <div>
                                <h4>MongoDb</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <GrMysql className='experience__details-icon' />
                            <div>
                                <h4>MySQL</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiSolidity className='experience__details-icon' />
                            <div>
                                <h4>Solidity</h4>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Experience