import React from 'react'

const aboutme = () => {
    return (
        <section id="about" className="tf__about_2 pt_130 xs_pt_80">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-9">
                        <div className="tf__section_heading mb_40">
                            <h5 className="has-animation">ABOUT Me</h5>
                            <h2 className="has-animation">
                                Crafting stories through design and innovation
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-xl-6 col-lg-6">
                        <div className="tf__about_text_2">
                            <ul>
                                <li>
                                    <div className="top fade_bottom" data-trigerId="about">
                                        <div className="img">
                                            <img
                                                src="images/icon/about_1.png"
                                                alt="about"
                                                className="img-fluid w-100" />
                                        </div>
                                        <div>
                                            <h3>My Ambition</h3>
                                            <p>
                                                I'm a dedicated front-end developer, skilled in creating user-centric digital solutions that seamlessly blend aesthetics with functionality. Recently, I've been focusing on leveraging data to enhance user experiences. My ambition is to push the boundaries of web development, harnessing the power of data for truly immersive online solutions.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="top fade_bottom" data-trigerId="about">
                                        <div className="img">
                                            <img
                                                src="images/icon/about_2.png"
                                                alt="about"
                                                className="img-fluid w-100" />
                                        </div>
                                        <div>
                                            <h3>My Purpose</h3>
                                            <p>
                                                My purpose is to transform the digital landscape by crafting web experiences that not only captivate users but also empower businesses through data-driven insights. I'm driven by the desire to push the boundaries of what's possible in web development, constantly seeking innovative solutions to create meaningful and immersive online experiences that make a difference.                                                        </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="tf__about_img tf__about_img_2">
                            <img
                                src="images/bg/HardikShali.jpeg"
                                alt="HARDIK"
                                className="img-fluid w-100" />
                            <div className="tf__about_img_text">
                                <i className="fa-sharp fa-solid fa-award"></i>
                                <h4>2+ <span>Years Of Experience</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default aboutme
