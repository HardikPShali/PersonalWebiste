import React from 'react'

const banner = () => {
    return (
        <section
            id="banner"
            className="tf__banner_2 banner"
            style={{ background: 'url(images/bg/banner_bg2.png)' }}
        >
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xxl-6 col-md-9 col-lg-7">
                        <div className="tf__banner_text">
                            <h1>
                                Hi, I'm Hardik! Creative
                                <span className="cd-headline rotate-1">
                                    <span className="cd-words-wrapper">
                                        <b className="is-visible">Developer</b>
                                        <b>Player</b>
                                    </span>
                                </span>
                            </h1>
                            <p>
                                Hello, I'm Hardik, a dedicated front-end developer with a passion for creating user-centric digital solutions. I blend creativity with technical prowess to craft aesthetically pleasing, functionally robust websites. Recently, I've delved into the world of data, seeking insights to enhance user experiences. Beyond the digital realm, music, sports, and poetry fuel my creativity. Let's shape the future of digital experiences together.
                            </p>
                            <ul>
                                <li>
                                    <a className="common_btn" href="www.google.com" target='_blank'
                                    >Download Cv
                                        <i className="fa-solid fa-arrow-down-to-line">
                                        </i>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default banner
