import React, { useState, useEffect } from 'react';
import AboutMe from './aboutme'
import Skills from './skills'
import Recommendation from './recommendation';
import Contact from './contact';
import Footer from './footer';
import Banner from './banner';
const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // 3 seconds

        return () => clearTimeout(timer); // Clear the timer if the component is unmounted before the timer fires
    }, [])

    return (
        <>
            {isLoading && (
                <div className="preloader">
                    <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
                    </svg>
                    <h5 className="preloader-text">Hardik</h5>
                </div>
            )}
            <div className="main">
                <div
                    data-bs-spy="scroll"
                    data-bs-target="#list-example"
                    data-bs-smooth-scroll="true"
                    className="scrollspy-example"
                    tabIndex="0"
                >
                    <Banner />
                    <AboutMe />
                    <Skills />
                    <div className="tf__brand mt_120 xs_mt_80">
                        <div className="row">
                            <div className="col-12">
                                <div className="marquee_animi">
                                    <ul>
                                        <li>* ReactJs</li>
                                        <li>* Python</li>
                                        <li>* Javascript</li>
                                        <li>* Web Development</li>
                                        <li>* Data Science</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Recommendation />
                    <Contact />
                    <Footer />

                    <div className="progress active">

                        <svg
                            className="progress-svg"
                            width="100%"
                            height="100%"
                            viewBox="-1 -1 102 102"
                        >
                            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
                        </svg>

                    </div>

                    <div id="magic-cursor">
                        <div id="ball"></div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Home
