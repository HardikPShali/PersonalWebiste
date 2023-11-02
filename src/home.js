import React, { useState, useEffect } from 'react';
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
                    tabindex="0"
                >
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
                    {/* 
                    <section id="service" className="tf__service_2 pt_130 xs_pt_80 animation">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 col-lg-9 m-auto">
                                    <div className="tf__section_heading mb_40">
                                        <h5 className="has-animation">MY serivce</h5>
                                        <h2 className="has-animation">
                                            Bringing your vision to life with precision and passion
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-md-6 col-lg-4">
                                    <div
                                        className="tf__single_service_2 fade_left"
                                        data-trigerId="service"
                                    >
                                        <div className="text">
                                            <span>
                                                <img
                                                    src="svg/mobile-programming.svg"
                                                    alt="service"
                                                    className="img-fluid w-100 svg" />
                                                <i className="icon-app-development"></i>
                                            </span>
                                            <h3>Website Design</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore
                                            </p>
                                        </div>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-lg-4">
                                    <div
                                        className="tf__single_service_2 fade_left active"
                                        data-trigerId="service"
                                    >
                                        <div className="text">
                                            <span>
                                                <img
                                                    src="svg/pen-tool-2.svg"
                                                    alt="service"
                                                    className="img-fluid w-100 svg" />
                                            </span>
                                            <h3>Logo Design</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore
                                            </p>
                                        </div>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-lg-4">
                                    <div
                                        className="tf__single_service_2 fade_left"
                                        data-trigerId="service"
                                    >
                                        <div className="text">
                                            <span>
                                                <img
                                                    src="svg/mobile.svg"
                                                    alt="service"
                                                    className="img-fluid w-100 svg" />
                                            </span>
                                            <h3>Apps Development</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore
                                            </p>
                                        </div>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    <section
                        id="skills"
                        className="tf__skills_2 pt_115 xs_pt_75 pb_120 xs_pb_80 mt_165 xs_mt_80"
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 col-lg-9 m-auto">
                                    <div className="tf__section_heading mb_30">
                                        <h5 className="has-animation">MY Skills</h5>
                                        <h2 className="has-animation">
                                            Crafting Stories through Design and Imagination
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xxl-8 col-xl-10 m-auto">
                                    <ul className="nav nav-pills mb_30" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="pills-home-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-home"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-home"
                                                aria-selected="true"
                                            >
                                                Download Cv <i className="fa-solid fa-arrow-down-to-line"></i>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="pills-profile-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-profile"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-profile"
                                                aria-selected="false"
                                            >
                                                Education
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="pills-contact-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-contact"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-contact"
                                                aria-selected="false"
                                            >
                                                Certificates
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="pills-disabled-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-disabled"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-disabled"
                                                aria-selected="false"
                                            >
                                                Experience
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="tab-content" id="pills-tabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="pills-home"
                                            role="tabpanel"
                                            aria-labelledby="pills-home-tab"
                                            tabindex="0"
                                        >
                                            {/* <div className="row">
                                                <div className="col-xl-6 col-lg-6">
                                                    <div
                                                        className="tf__single_skill_2 fade_bottom"
                                                        data-trigerId="skills"
                                                    >
                                                        <h3>Creative Agency</h3>
                                                        <h2>Framer Designer & Developer</h2>
                                                        <h4>2019 - Present</h4>
                                                        <p>
                                                            Nemo enim ipsam voluptatem quia voluptas sit
                                                            aspernatur aut odit aut fugit sed thisnquia
                                                            consequuntur magni dolores eos qui ratione
                                                            voluptatem sequi nesciunt
                                                        </p>
                                                        <div className="tf__team_skills_bar_single">
                                                            <p>Performence</p>
                                                            <div id="bar1" className="barfiller">
                                                                <div className="tipWrap">
                                                                    <span className="tip"></span>
                                                                </div>
                                                                <span className="fill" data-percentage="80"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6">
                                                    <div
                                                        className="tf__single_skill_2 fade_bottom"
                                                        data-trigerId="skills"
                                                    >
                                                        <h3>Apple Technology</h3>
                                                        <h2>Web Application Manager</h2>
                                                        <h4>2009 - 2012</h4>
                                                        <p>
                                                            Nemo enim ipsam voluptatem quia voluptas sit
                                                            aspernatur aut odit aut fugit sed thisnquia
                                                            consequuntur magni dolores eos qui ratione
                                                            voluptatem sequi nesciunt
                                                        </p>
                                                        <div className="tf__team_skills_bar_single">
                                                            <p>Performence</p>
                                                            <div id="bar2" className="barfiller">
                                                                <div className="tipWrap">
                                                                    <span className="tip"></span>
                                                                </div>
                                                                <span className="fill" data-percentage="90"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6">
                                                    <div
                                                        className="tf__single_skill_2 fade_bottom"
                                                        data-trigerId="skills"
                                                    >
                                                        <h3>Softech Agency</h3>
                                                        <h2>Wordpress and End Developer</h2>
                                                        <h4>2014 - 2018</h4>
                                                        <p>
                                                            Nemo enim ipsam voluptatem quia voluptas sit
                                                            aspernatur aut odit aut fugit sed thisnquia
                                                            consequuntur magni dolores eos qui ratione
                                                            voluptatem sequi nesciunt
                                                        </p>
                                                        <div className="tf__team_skills_bar_single">
                                                            <p>Performence</p>
                                                            <div id="bar3" className="barfiller">
                                                                <div className="tipWrap">
                                                                    <span className="tip"></span>
                                                                </div>
                                                                <span className="fill" data-percentage="75"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6">
                                                    <div
                                                        className="tf__single_skill_2 fade_bottom"
                                                        data-trigerId="skills"
                                                    >
                                                        <h3>Kent State University</h3>
                                                        <h2>Master Degree Of information Technology</h2>
                                                        <h4>2005 - 2009</h4>
                                                        <p>
                                                            Nemo enim ipsam voluptatem quia voluptas sit
                                                            aspernatur aut odit aut fugit sed thisnquia
                                                            consequuntur magni dolores eos qui ratione
                                                            voluptatem sequi nesciunt
                                                        </p>
                                                        <div className="tf__team_skills_bar_single">
                                                            <p>Performence</p>
                                                            <div id="bar4" className="barfiller">
                                                                <div className="tipWrap">
                                                                    <span className="tip"></span>
                                                                </div>
                                                                <span className="fill" data-percentage="70"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-profile"
                                            role="tabpanel"
                                            aria-labelledby="pills-profile-tab"
                                            tabindex="0"
                                        >
                                            <div className="row education">
                                                <div className="col-xl-12 col-lg-6">
                                                    <div
                                                        className="tf__single_skill_2 fade_bottom"
                                                        data-trigerId="skills"
                                                    >
                                                        <h3>MASTER'S DEGREE IN DATA SCIENCE</h3>
                                                        <h2>
                                                            <a
                                                                href="https://www.iu.org/en-in/?utm_source=google&utm_medium=organic&utm_campaign=mybusiness&utm_content=berlin"
                                                                target='_blank'
                                                                style={{
                                                                    textDecoration: "none",
                                                                    color: "#0078d4", // Link text color
                                                                    cursor: "pointer",
                                                                    textShadow: "1px 1px 2px #09101a", // Text shadow color matches background
                                                                    transition: "textShadow 0.3s"
                                                                }}
                                                            >
                                                                IU International University of Applied Sciences - Campus Berlin
                                                            </a>
                                                            <span style={{ marginLeft: '0.5rem' }}>· Berlin,Germany</span>
                                                        </h2>

                                                        <h4>04/2024 - 2025</h4>
                                                        <p>
                                                            In April 2024, I will begin my MSc in Data Science at a university in Berlin, Germany, as I embark on an exciting journey to further my expertise in this dynamic field.                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 col-lg-6">
                                                    <div
                                                        className="tf__single_skill_2 fade_bottom"
                                                        data-trigerId="skills"
                                                    >
                                                        <h3>MASTER'S DEGREE IN INFORMATION TECHNOLOGY MSc (IT)</h3>
                                                        <h2>
                                                            <a
                                                                href="http://www.vnsguit.org/"
                                                                target='_blank'
                                                                style={{
                                                                    textDecoration: "none",
                                                                    color: "#0078d4", // Link text color
                                                                    cursor: "pointer",
                                                                    textShadow: "1px 1px 2px #09101a", // Text shadow color matches background
                                                                    transition: "textShadow 0.3s"
                                                                }}
                                                            >
                                                                J.P.Dawer institute of Information Science and Technology - BSc (IT) & MSc (ICT)
                                                            </a>
                                                            <span style={{ marginLeft: '0.5rem' }}>· Surat,India</span>
                                                        </h2>
                                                        <h4>10/2020 - 07/2022</h4>
                                                        <p style={{
                                                            fontSize: '14px',
                                                            lineHeight: '1.5',
                                                            textAlign: 'left',
                                                            maxHeight: '150px',
                                                            overflowY: 'auto', // Add this line to enable vertical scrolling
                                                            whiteSpace: 'pre-line', // Preserve line breaks in the text
                                                        }}>
                                                            I achieved a CGPA of 7.2 during my master's program.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 col-lg-6">
                                                    <div
                                                        className="tf__single_skill_2 fade_bottom"
                                                        data-trigerId="skills"
                                                    >
                                                        <h3>BACHELOR'S DEGREE IN INFORMATION TECHNOLOGY BSc (IT)</h3>
                                                        <h2>
                                                            <a
                                                                href="http://www.vnsguit.org/"
                                                                target='_blank'
                                                                style={{
                                                                    textDecoration: "none",
                                                                    color: "#0078d4", // Link text color
                                                                    cursor: "pointer",
                                                                    textShadow: "1px 1px 2px #09101a", // Text shadow color matches background
                                                                    transition: "textShadow 0.3s"
                                                                }}
                                                            >
                                                                J.P.Dawer institute of Information Science and Technology - BSc (IT) & MSc (ICT)
                                                            </a>
                                                            <span style={{ marginLeft: '0.5rem' }}>· Surat,India</span>
                                                        </h2>

                                                        <h4>07/2017 - 02/2020</h4>
                                                        <p style={{
                                                            fontSize: '14px',
                                                            lineHeight: '1.5',
                                                            textAlign: 'left',
                                                            maxHeight: '150px',
                                                            overflowY: 'auto', // Add this line to enable vertical scrolling
                                                            whiteSpace: 'pre-line', // Preserve line breaks in the text
                                                        }}>
                                                            I attained a CGPA of 6.5 in my bachelor's degree.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* <div className="col-xl-6 col-lg-6">
                                                    <div
                                                        className="tf__single_skill_2 fade_bottom"
                                                        data-trigerId="skills"
                                                    >
                                                        <h3>HSC</h3>
                                                        <h2>Jeevan Bharti Educational School</h2>
                                                        <h4>Mar-2017</h4>
                                                        <p>
                                                            Nemo enim ipsam voluptatem quia voluptas sit
                                                            aspernatur aut odit aut fugit sed thisnquia
                                                            consequuntur magni dolores eos qui ratione
                                                            voluptatem sequi nesciunt
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6">
                                                    <div
                                                        className="tf__single_skill_2 fade_bottom"
                                                        data-trigerId="skills"
                                                    >
                                                        <h3>SSC</h3>
                                                        <h2>Jeevan Bharti Educational School</h2>
                                                        <h4>Mar-2015</h4>
                                                        <p>
                                                            Nemo enim ipsam voluptatem quia voluptas sit
                                                            aspernatur aut odit aut fugit sed thisnquia
                                                            consequuntur magni dolores eos qui ratione
                                                            voluptatem sequi nesciunt
                                                        </p>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-contact"
                                            role="tabpanel"
                                            aria-labelledby="pills-contact-tab"
                                            tabindex="0"
                                        >
                                            <div className="row education">
                                                <div className="col-xl-12 col-lg-6">
                                                    <div
                                                        className="tf__single_skill_2 fade_bottom"
                                                        data-trigerId="skills"
                                                    >
                                                        <h3>Udemy</h3>
                                                        <h2>
                                                            <a
                                                                href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?kw=The+Complete+2023+Web+Development+Bootcamp&src=sac"
                                                                target='_blank'
                                                                style={{
                                                                    textDecoration: "none",
                                                                    color: "#0078d4", // Link text color
                                                                    cursor: "pointer",
                                                                    textShadow: "1px 1px 2px #09101a", // Text shadow color matches background
                                                                    transition: "textShadow 0.3s"
                                                                }}
                                                            >
                                                                The Complete 2023 Web Development Bootcamp
                                                            </a>
                                                        </h2>
                                                        <h4>Mar-2023</h4>
                                                        <p style={{
                                                            fontSize: '14px',
                                                            lineHeight: '1.5',
                                                            textAlign: 'left',
                                                            maxHeight: '150px',
                                                            overflowY: 'auto', // Add this line to enable vertical scrolling
                                                            whiteSpace: 'pre-line', // Preserve line breaks in the text
                                                        }}>
                                                            This web development course offers hands-on experience in building 16 diverse projects to strengthen your portfolio, positioning you for junior developer roles. It covers a range of technologies, including JavaScript, React for frontend development, Node for backend development, and even Web3 development. By the end, you'll have the skills to create any website or web application, whether for personal projects, startups, or businesses, and you'll be prepared to work as a freelance web developer while mastering best practices in professional development.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="col-xl-12 col-lg-6">
                                                    <div
                                                        className="tf__single_skill_2 fade_bottom"
                                                        data-trigerId="skills"
                                                    >
                                                        <h3>Udemy</h3>
                                                        <h2>
                                                            <a
                                                                href="https://www.udemy.com/certificate/UC-080ed108-bd9a-4f61-8275-db9c7b447901/"
                                                                target='_blank'
                                                                style={{
                                                                    textDecoration: "none",
                                                                    color: "#0078d4", // Link text color
                                                                    cursor: "pointer",
                                                                    textShadow: "1px 1px 2px #09101a", // Text shadow color matches background
                                                                    transition: "textShadow 0.3s"
                                                                }}
                                                            >
                                                                The Complete Python Bootcamp From Zero to Hero in Python
                                                            </a>
                                                        </h2>


                                                        <h4>Jun-2023</h4>
                                                        <p style={{
                                                            fontSize: '14px',
                                                            lineHeight: '1.5',
                                                            textAlign: 'left',
                                                            maxHeight: '150px',
                                                            overflowY: 'auto', // Add this line to enable vertical scrolling
                                                            whiteSpace: 'pre-line', // Preserve line breaks in the text
                                                        }}>
                                                            This comprehensive Python learning program covers a wide range of skills, from mastering both Python 2 and Python 3 to building games like Tic Tac Toe and Blackjack, and delving into advanced features such as the collections module and decorators. You'll also gain proficiency in Object Oriented Programming, learn to work with timestamps, create GUIs in the Jupyter Notebook system, and build a portfolio of Python projects for personal and professional use, enabling you to leverage Python for various tasks and projects.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-6">
                                                <div
                                                    className="tf__single_skill_2 fade_bottom"
                                                    data-trigerId="skills"
                                                >
                                                    <h3>Udemy</h3>
                                                    <h2><a href="https://www.udemy.com/certificate/UC-4d5476ea-1f5c-44eb-a94b-a9d08accbe69/" target='_blank' style={{
                                                        textDecoration: "none",
                                                        color: "#0078d4", // Link text color
                                                        cursor: "pointer",
                                                        textShadow: "1px 1px 2px #09101a", // Text shadow color matches background
                                                        transition: "textShadow 0.3s"
                                                    }}>The Data Science Course: Complete Data Science Bootcamp 2023</a></h2>
                                                    <h4>Jun-2023</h4>
                                                    <p style={{
                                                        fontSize: '14px',
                                                        lineHeight: '1.5',
                                                        textAlign: 'left',
                                                        maxHeight: '150px',
                                                        overflowY: 'auto', // Add this line to enable vertical scrolling
                                                        whiteSpace: 'pre-line', // Preserve line breaks in the text
                                                    }}>

                                                        This comprehensive data science course equips you with a diverse skill set to excel in the field. You'll learn statistical analysis, Python programming with essential libraries like NumPy, pandas, matplotlib, and Seaborn, advanced statistical techniques, Tableau for data visualization, and machine learning with tools like stats models and scikit-learn. Additionally, you'll delve into deep learning using TensorFlow, gain a deep understanding of the mathematics behind machine learning, and apply these skills to real-world business scenarios. By the end, you'll be well-versed in data preprocessing, regression, clustering, factor analysis, and the development of machine learning algorithms, all while honing your intuition for solving real-world data challenges.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0">
                                            <div className="row education">
                                                <div className="col-xl-12 col-lg-6">
                                                    <div className="tf__single_skill_2 fade_bottom" data-trigerId="skills">
                                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Implementation Consultant</h3>
                                                        <h2>
                                                            <a
                                                                href="https://www.dataio.co/"
                                                                target='_blank'
                                                                style={{
                                                                    textDecoration: "none",
                                                                    color: "#0078d4",
                                                                    cursor: "pointer",
                                                                    textShadow: "1px 1px 2px #09101a",
                                                                    transition: "textShadow 0.3s",
                                                                }}
                                                            >
                                                                Dataio
                                                            </a>
                                                            <span style={{ marginLeft: '0.5rem' }}>· On-Site</span>
                                                        </h2>
                                                        <h4>Apr 2023 - Sep 2023</h4>
                                                        <p style={{
                                                            fontSize: '14px',
                                                            lineHeight: '1.5',
                                                            textAlign: 'left',
                                                            maxHeight: '150px',
                                                            overflowY: 'auto', // Add this line to enable vertical scrolling
                                                            whiteSpace: 'pre-line', // Preserve line breaks in the text
                                                        }}>
                                                            Embarked on a comprehensive exploration of MDM system architecture, seamlessly mastering its core
                                                            components with an innate proficiency. Successfully completed rigorous MDM Implementation Consultancy Training, delving deeply into key
                                                            strategies, solutions, and best practices. Possess a strong foundation in data governance frameworks, eager and well-prepared to apply this knowledge in real-world, data-centric initiatives for a forward-thinking organization.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 col-lg-6">
                                                    <div className="tf__single_skill_2 fade_bottom" data-trigerId="skills">
                                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Software Engineer</h3>
                                                        <h2>
                                                            <a
                                                                href="https://accubits.com/"
                                                                target='_blank'
                                                                style={{
                                                                    textDecoration: "none",
                                                                    color: "#0078d4",
                                                                    cursor: "pointer",
                                                                    textShadow: "1px 1px 2px #09101a",
                                                                    transition: "textShadow 0.3s",
                                                                }}
                                                            >
                                                                Accubits Technologies Inc
                                                            </a>
                                                            <span style={{ marginLeft: '0.5rem' }}>· Remote</span>
                                                        </h2>
                                                        <h4>Dec-2021 - Apr-2023</h4>

                                                        <p style={{ fontWeight: 'bold' }}>
                                                            FutureGrail — Detail
                                                        </p>

                                                        <p style={{
                                                            fontSize: '14px',
                                                            lineHeight: '1.5',
                                                            textAlign: 'left',
                                                            maxHeight: '150px',
                                                            overflowY: 'auto', // Add this line to enable vertical scrolling
                                                            whiteSpace: 'pre-line', // Preserve line breaks in the text
                                                        }}>
                                                            <u>CoinFactory Overview:</u><br />
                                                            CoinFactory is a battle-tested, self-hosted, and ultra-secure ICO platform that has successfully hosted more than ten ICOs. It boasts features such as referral programs, bounty programs, logging reporting, and end-to-end customization options to give your ICO platform a unique look.<br /><br />

                                                            <u>Technology Stack:</u><br />
                                                            Throughout the development process, I utilized NextJS for server-side rendering and Redux for state management. Styled Components were used to create a visually appealing and consistent user interface. API integration was also crucial to make the platform dynamic.<br /><br />

                                                            <u>Collaboration and Project Management:</u><br />
                                                            Collaboration was key during the project, and Git and Jira were used to manage and track progress. I prioritized tasks based on importance and worked with developers to identify and resolve software bugs. Additionally, I integrated third-party tools and components into the application and coordinated efficient large-scale software deployments.<br /><br />

                                                            <u>Project Outcome:</u><br />
                                                            The end result is a robust, scalable, modular, and API-centric infrastructure that delivers excellent results for our client, FutureGrail in Singapore. To keep the client updated, I delivered project reports and milestone updates to the supervisor.<br /><br />

                                                            <u>Project Link:</u><br />
                                                            You can check out the project at <a href="https://www.futuregrail.com/" target='_blank'>futuregrail.com</a>
                                                        </p>


                                                        <p style={{ fontWeight: 'bold' }}>
                                                            HealthierU  — Detail
                                                        </p>
                                                        <p style={{
                                                            fontSize: '14px',
                                                            lineHeight: '1.5',
                                                            textAlign: 'left',
                                                            maxHeight: '150px',
                                                            overflowY: 'auto', // Add this line to enable vertical scrolling
                                                            whiteSpace: 'pre-line', // Preserve line breaks in the text
                                                        }}>
                                                            <u>User Interface Design:</u><br />
                                                            The goal was to create a responsive and visually appealing user interface that would provide a seamless experience to the end users. I utilized Material-UI components and CSS styling to create a consistent look and feel across the application.<br /><br />

                                                            <u>State Management and Interactivity:</u><br />
                                                            Additionally, I used ReactJS to create reusable components and implemented state management using hooks to enhance the user experience. API integration was crucial to the project's success.<br /><br />

                                                            <u>Chat and Video Call Integration:</u><br />
                                                            I also leveraged Agora SDK to implement chat and video call functionality to make the application more interactive.<br /><br />

                                                            <u>Collaboration and Project Management:</u><br />
                                                            Collaboration was vital, and I utilized Git and Jira to manage the project and communicate with my team members effectively. By prioritizing tasks and coordinating efficiently, we were able to deliver excellent results to the client.<br /><br />

                                                            <u>Project Link:</u><br />
                                                            You can check out the project at <a href="https://healthieru.ae/" target='_blank'>healthieru.ae</a>
                                                        </p>



                                                    </div>
                                                </div>
                                                <div className="col-xl-12 col-lg-6">
                                                    <div className="tf__single_skill_2 fade_bottom" data-trigerId="skills">
                                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Java Developer</h3>
                                                        <h2>
                                                            <a
                                                                href="http://www.vnsguit.org/"
                                                                target='_blank'
                                                                style={{
                                                                    textDecoration: "none",
                                                                    color: "#0078d4",
                                                                    cursor: "pointer",
                                                                    textShadow: "1px 1px 2px #09101a",
                                                                    transition: "textShadow 0.3s",
                                                                }}
                                                            >
                                                                J.P.Dawer Institute of Information Science and Technology - BSc (IT) & MSc (ICT)
                                                            </a>
                                                            <span style={{ marginLeft: '0.5rem' }}>· Apprenticeship</span>
                                                        </h2>
                                                        <h4>Mar-2021 - Jul-2021</h4>
                                                        <p style={{ fontWeight: 'bold' }}>InsuranceHub - Project Conversion</p>
                                                        <p style={{
                                                            fontSize: '14px',
                                                            lineHeight: '1.5',
                                                            textAlign: 'left',
                                                            maxHeight: '150px',
                                                            overflowY: 'auto', // Add this line to enable vertical scrolling
                                                            whiteSpace: 'pre-line', // Preserve line breaks in the text
                                                        }}>
                                                            <u>Project Overview:</u><br />
                                                            This project involved the conversion of the existing InsuranceHub project, which was developed in DotNet, into Java. The aim was to replicate the functionality of the original project using Java technologies.<br /><br />

                                                            <u>Technology Stack:</u><br />
                                                            The new project utilized Java Enterprise Edition (JavaEE) and JavaServer Faces (JSF) to create a server-side web application. HTML, CSS, and JavaScript were used to create a responsive and visually appealing user interface. SQL was used for database management.<br /><br />

                                                            <u>Code Migration:</u><br />
                                                            The project involved migrating the existing codebase from DotNet to Java while ensuring that all functionalities remained intact. The team worked on prioritizing tasks and completing them in order of importance. They also worked on identifying and removing software bugs to ensure a smooth transition from the old project to the new one.<br /><br />

                                                            <u>Admin Panel:</u><br />
                                                            The Admin Panel for H&T Insurance allows the management of various aspects related to insurance policies and customer feedback. The panel enables admins to manage the insurance companies and hospitals that are associated with InsuranceHub. It provides the ability to add, update, or delete different types of insurance policies.<br /><br />

                                                            <u>Customer Interaction:</u><br />
                                                            In addition, the panel displays customer feedback and inquiries, providing valuable insights into customer needs and concerns. Admins can also manage customer accounts, including the status of payments for various policies.<br /><br />

                                                            <u>Client Panel:</u><br />
                                                            The Client Panel allows customers to sign in and log in to their accounts, where they can browse through different policies for term and health insurance. They can select a policy as per their requirements, provide necessary details, and make payments online. Customers can only select one policy at a time, and the panel provides an Invoice and Purchase History feature to keep track of transactions.<br /><br />

                                                            <u>Technology Stack for User Experience:</u><br />
                                                            The panel uses JakartaEE, JSF, HTML, CSS, JavaScript, and SQL technologies to create a seamless user experience. The use of these technologies ensures that the system is efficient, secure, and easy to use. Customers can also update their profiles, ensuring that their details are up-to-date and accurate. Overall, the system provides a comprehensive and efficient solution for managing insurance policies and customer accounts.
                                                        </p>

                                                    </div>
                                                </div>
                                                <div className="col-xl-12 col-lg-6">
                                                    <div className="tf__single_skill_2 fade_bottom" data-trigerId="skills">
                                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>.NET Developer</h3>
                                                        <h2>
                                                            <a
                                                                href="http://www.galaxydev.in/"
                                                                target='_blank'
                                                                style={{
                                                                    textDecoration: "none",
                                                                    color: "#0078d4",
                                                                    cursor: "pointer",
                                                                    textShadow: "1px 1px 2px #09101a",
                                                                    transition: "textShadow 0.3s",
                                                                }}
                                                            >
                                                                Galaxy Developers
                                                            </a>
                                                            <span style={{ marginLeft: '0.5rem' }}>· Internship</span>
                                                        </h2>
                                                        <h4>Dec-2020 - Feb-2021</h4>
                                                        <p style={{ fontWeight: 'bold' }}>InsuranceHub — Detail</p>
                                                        <p style={{
                                                            fontSize: '14px',
                                                            lineHeight: '1.5',
                                                            textAlign: 'left',
                                                            maxHeight: '150px',
                                                            overflowY: 'auto', // Add this line to enable vertical scrolling
                                                            whiteSpace: 'pre-line', // Preserve line breaks in the text
                                                        }}>
                                                            <u>Project Modules:</u><br />
                                                            The website comprises two main modules, namely Admin and Customer. The Admin module enables the management of policies and payment processes. Additionally, the Admin module can be utilized as an intermediary software by agents to provide policies to customers. The Customer module allows customers to purchase policies and make payments as per their chosen policy.<br /><br />

                                                            <u>Database Management:</u><br />
                                                            All user information files are stored in a centralized database that is managed by the system. The convenience and speed of purchasing insurance online are unparalleled, allowing customers to buy policies from anywhere in the world at any time.<br /><br />

                                                            <u>Profile Management:</u><br />
                                                            This system offers profile management for all policyholders, along with an interface that provides customers with easy access to their policy details. Payment processes are similar to e-commerce transactions, and customers can easily pay their policies online. This hassle-free process is completed in minimal time, reducing overall costs.<br /><br />

                                                            <u>Eliminating Commissions:</u><br />
                                                            Directly buying from the insurance company eliminates the agent's commission, and the paperless process saves costs. The system offers customers information about new and existing policies online.<br /><br />

                                                            <u>Development Process:</u><br />
                                                            Tasks were prioritized and completed based on their level of importance, with collaboration between the team and developers to identify and resolve software bugs. Technologies used include C#.NET, HTML, CSS, JavaScript, and SQL.
                                                        </p>

                                                    </div>
                                                </div>
                                                <div className="col-xl-12 col-lg-6">
                                                    <div className="tf__single_skill_2 fade_bottom" data-trigerId="skills">
                                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>PHP Developer</h3>
                                                        <h2>
                                                            <a
                                                                href="https://innovativeiteration.com/"
                                                                target='_blank'
                                                                style={{
                                                                    textDecoration: "none",
                                                                    color: "#0078d4",
                                                                    cursor: "pointer",
                                                                    textShadow: "1px 1px 2px #09101a",
                                                                    transition: "textShadow 0.3s",
                                                                }}
                                                            >
                                                                Innovative Iteration Software Solutions
                                                            </a>
                                                            <span style={{ marginLeft: '0.5rem' }}>· Internship</span>
                                                        </h2>
                                                        <h4>Feb-2020 - May-2020</h4>
                                                        <p style={{ fontWeight: 'bold' }}>CarCare — Detail</p>
                                                        <p style={{
                                                            fontSize: '14px',
                                                            lineHeight: '1.5',
                                                            textAlign: 'left',
                                                            maxHeight: '150px',
                                                            overflowY: 'auto', // Add this line to enable vertical scrolling
                                                            whiteSpace: 'pre-line', // Preserve line breaks in the text
                                                        }}>
                                                            <u>Project Overview:</u><br />
                                                            I developed a Car Service Management system called CarCare that provides customers with low-cost four-wheel vehicle services. The system allows customers to access a range of service centers without needing to leave their homes.<br /><br />

                                                            <u>Features:</u><br />
                                                            CarCare enables various service center owners to register their centers, and customers can choose from a variety of service centers based on their requirements. To enhance the customer experience, an Online Payment module has been implemented, making the payment process quick and secure.<br /><br />

                                                            <u>Development Process:</u><br />
                                                            Throughout the development process, I prioritized tasks to ensure that the most critical issues were addressed first. I worked with developers to identify and remove software bugs and analyzed the source code to identify functionality issues. To create an intuitive and visually appealing user interface, I utilized CSS, JS, and BOOTSTRAP 4.<br /><br />

                                                            <u>Technologies Used:</u><br />
                                                            The project was developed using Sublime Text 3 as the development tool, Core PHP as the technology, and MYSQL Server as the backend. The end result is a user-friendly and efficient system that provides customers with a range of affordable and convenient car service options.
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <section
                        id="portfolio"
                        className="tf__portfolio tf__portfolio_2 mt_120 xs_mt_80"
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-10 col-lg-9 mb_30">
                                    <div className="tf__section_heading">
                                        <h5 className="has-animation">my recent Portfolio</h5>
                                        <h2 className="has-animation">
                                            Elevate your brand to new heights with my portfolio
                                            expertise
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-sm-6">
                                    <a
                                        href="https://www.youtube.com/watch?v=B-ytMSuwbf8"
                                        className="tf__portfolio_item play_btn"
                                        data-cursor="Watch <br> video"
                                    >
                                        <img
                                            src="images/portfolio/5.png"
                                            alt="portfolio"
                                            className="img-fluid w-100" />
                                        <div className="text">
                                            <h4>sheet metal bending</h4>
                                            <p>youtube</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-xl-6 col-sm-6">
                                    <a
                                        className="tf__portfolio_item play_btn"
                                        href="https://vimeo.com/132528823"
                                        data-cursor="Watch <br> video"
                                    >
                                        <img
                                            src="images/portfolio/6.png"
                                            alt="portfolio"
                                            className="img-fluid w-100" />
                                        <h4>sheet metal bending</h4>
                                        <p>Vimeo</p>

                                    </a>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <a
                                        href="https://w.soundcloud.com/player/?visual=true&amp;url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F159967086&amp;show_artwork=true&amp;maxwidth=1020&amp;maxheight=1000&amp;auto_play=1"
                                        className="tf__portfolio_item play_btn"
                                        data-cursor="Audio <br> sound"
                                    >
                                        <img
                                            src="images/portfolio/7.png"
                                            alt="portfolio"
                                            className="img-fluid w-100" />
                                        <div className="text">
                                            <h4>sheet metal bending</h4>
                                            <p>soundcloud</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <a
                                        href="images/portfolio/8.png"
                                        className="tf__portfolio_item image_popup"
                                        data-cursor="View <br> Image"
                                    >
                                        <img
                                            src="images/portfolio/8.png"
                                            alt="portfolio"
                                            className="img-fluid w-100" />
                                        <div className="text">
                                            <h4>sheet metal bending</h4>
                                            <p>Image</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-xl-4 col-sm-6">
                                    <a
                                        href="#details-popup"
                                        className="tf__portfolio_item details"
                                        data-cursor="Details <br> View"
                                    >
                                        <img
                                            src="images/portfolio/9.png"
                                            alt="portfolio"
                                            className="img-fluid w-100" />
                                        <div className="text">
                                            <h4>sheet metal bending</h4>
                                            <p>Modalbox</p>
                                        </div>
                                    </a>
                                    <div className="mfp-fade mfp-hide" id="details-popup">
                                        <div className="content">
                                            <div className="img">
                                                <img src="images/portfolio/9.png" alt="" />
                                            </div>
                                            <div className="des">
                                                <span className="category">Modalbox</span>
                                                <h4 className="popup_title">Mobile Application</h4>
                                                <p>
                                                    We live in a world where we need to move quickly and
                                                    iterate on our ideas as flexibly as possible. Building
                                                    mockups strikes the ideal balance between true-life
                                                    representation of the end product and ease of
                                                    modification.
                                                </p>
                                                <div className="details_quot_text">
                                                    <p>
                                                        ished fact that a reader will be distrol acted bioii
                                                        the.ished fact that a reader .
                                                    </p>
                                                    <h4>By Insuzu Litarnit</h4>
                                                </div>
                                                <p>
                                                    Mockups are useful both for the creative phase of the
                                                    project - for instance when you're trying to figure out
                                                    your user flows or the proper visual hierarchy - and the
                                                    production phase when they will represent the target
                                                    product. Making mockups a part of your creative and
                                                    development process allows you to quickly and easily
                                                    ideate.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

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

                    <section id="recommendation" className="tf__blog_2 pt_120 xs_pt_80 pb_120 xs_pb_80">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 m-auto mb_30">
                                    <div className="tf__section_heading">
                                        <h5 className="has-animation">Recommendations</h5>
                                        <p className="has-animation" style={{
                                            fontSize: '18px',
                                            lineHeight: '1.5',
                                        }}>
                                            Clients and colleagues have praised my dedication, expertise, and contributions in the field of IT, exemplified by their encouraging recommendations.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="row animation">
                                <div className="col-xl-4 col-md-6">
                                    <div className="tf__slingle_blog_2 fade_left" data-trigerId="recommendation">
                                        <a
                                            href="https://www.linkedin.com/in/tharun-abraham-elias-7644531b2/"
                                            data-cursor="LinkedIn <br> Profile"
                                            className="tf__blog_img_2"
                                            target='_blank'
                                        >
                                            <img
                                                src="images/recommendations/Tharun.jpg"
                                                alt="img"
                                                className="img-fluid w-100" />
                                            <span>March 27, 2023</span>
                                        </a>
                                        <div className="tf__blog_text_2">
                                            <ul>
                                                <li>
                                                    <i className="fa-sharp fa-solid fa-circle-user"></i> Project Manager
                                                </li>
                                            </ul>
                                            <a className="title" data-cursor="Email"
                                                target='_blank' href="mailto:tharunelias@gmail.com"
                                            >Tharun Abraham Elias
                                            </a>
                                            <p style={{
                                                fontSize: '14px',
                                                lineHeight: '1.5',
                                                textAlign: 'left',
                                                maxHeight: '150px',
                                                overflowY: 'auto', // Add this line to enable vertical scrolling
                                                whiteSpace: 'pre-line', // Preserve line breaks in the text
                                            }}>
                                                It was a pleasure working with Hardik due to his work ethics and professional behaviour, but at the same time, having a fun and lovely attitude that shines across each conversation. You could visibly see his commitment during times of crisis, and I could have always expected nothing but the best effort from him when the situation demanded it. I would recommend him to any team that would like to have a committed and professional resource. Stay blessed.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="tf__slingle_blog_2 fade_left" data-trigerId="recommendation">
                                        <a
                                            href="https://www.linkedin.com/in/bearnithi/"
                                            data-cursor="LinkedIn <br> Profile"
                                            className="tf__blog_img_2"
                                            target='_blank'
                                        >
                                            <img
                                                src="images/recommendations/NithyaSmall.png"
                                                alt="img"
                                                className="img-fluid w-100" />
                                            <span>March 28, 2023</span>
                                        </a>
                                        <div className="tf__blog_text_2">
                                            <ul>
                                                <li>
                                                    <i className="fa-sharp fa-solid fa-circle-user"></i> Technical Team Lead
                                                </li>
                                            </ul>
                                            <a className="title" href="mailto:bearnithi@gmail.com"
                                                data-cursor="Email"
                                                target='_blank'
                                            >Nithya Rajan
                                            </a>
                                            <p style={{
                                                fontSize: '14px',
                                                lineHeight: '1.5',
                                                textAlign: 'left',
                                                maxHeight: '150px',
                                                overflowY: 'auto', // Add this line to enable vertical scrolling
                                                whiteSpace: 'pre-line', // Preserve line breaks in the text

                                            }}>
                                                I had the pleasure of working with Hardik for a year while he was a React Developer at Accubits Technologies. During this time, I witnessed his strong logic knowledge and impressive UI skills. Hardik's contributions to our healthcare product were invaluable, and he played a significant role in completing the authentication and appointment booking module in a timely manner.

                                                Hardik's technical expertise in React was apparent from the start, and his ability to understand complex problems and create solutions was impressive. He was always willing to collaborate with the team and share his knowledge to improve the quality of our work. His commitment to delivering high-quality code was evident, and he always went the extra mile to ensure that everything was functioning as intended.

                                                In addition to his technical abilities, I was impressed by Hardik's professionalism and work ethic. He was always punctual, reliable, and able to manage his time effectively. His positive attitude and willingness to take on new challenges made him a valuable member of our team.

                                                Overall, I highly recommend Hardik for any future opportunities. With his strong logic knowledge, excellent UI skills, and proven ability to complete projects on time, I have no doubt that he will continue to be a valuable asset to any organization.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="tf__slingle_blog_2 fade_left" data-trigerId="recommendation">
                                        <a
                                            href="https://www.linkedin.com/in/jayakrishnan-a-v-528a16112/"
                                            data-cursor="LinkedIn <br> Profile"
                                            className="tf__blog_img_2"
                                            target='_blank'
                                        >
                                            <img
                                                src="images/recommendations/Jay.jpg"
                                                alt="img"
                                                className="img-fluid w-100" />
                                            <span>April 3, 2023</span>
                                        </a>
                                        <div className="tf__blog_text_2">
                                            <ul>
                                                <li>
                                                    <i className="fa-sharp fa-solid fa-circle-user"></i> Technical Lead
                                                </li>
                                            </ul>
                                            <a className="title" data-cursor="Email"
                                                target='_blank' href="mailto:jayakrishnanadiyalloor@gmail.com"
                                            >Jayakrishnan A V
                                            </a>
                                            <p style={{
                                                fontSize: '14px',
                                                lineHeight: '1.5',
                                                textAlign: 'left',
                                                maxHeight: '150px',
                                                overflowY: 'auto', // Add this line to enable vertical scrolling
                                                whiteSpace: 'pre-line', // Preserve line breaks in the text
                                            }}>
                                                Hardik is an extremely dedicated and talented professional who consistently demonstrates a strong work ethic and a commitment to excellence.
                                                He is highly skilled in javascript, his attention to detail and ability to think creatively make him a valuable asset to any team. He is also a great communicator and team player,
                                                always willing to collaborate and share his ideas to help move projects forward.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="contact" className="tf__contact_2 pt_95 xs_pt_45">
                        <div className="container">
                            <div className="row animation">
                                <div className="col-xl-4 col-md-6 col-lg-4">
                                    <div
                                        className="tf__contact_2_text fade_left"
                                        data-trigerId="contact"
                                    >
                                        <span>
                                            <img
                                                src="svg/voice_phone.svg"
                                                alt="contact"
                                                className="img-fluid w-100 svg" />
                                        </span>
                                        <h3>Phone</h3>
                                        <p>
                                            Personal Contact Number
                                        </p>
                                        <a href="callto:+919724641610">+919724641610</a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-lg-4">
                                    <div
                                        className="tf__contact_2_text fade_left"
                                        data-trigerId="contact"
                                    >
                                        <span>
                                            <img
                                                src="svg/map_issue.svg"
                                                alt="contact"
                                                className="img-fluid w-100 svg" />
                                        </span>
                                        <h3>Location</h3>
                                        <p>
                                            Surat, Gujarat, India
                                        </p>
                                        <a target='_blank' href="https://www.google.com/maps/search/surat+gujarat+india+map+link/@21.0732501,72.4888589,9z/data=!3m1!4b1?entry=ttu">View on map</a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-lg-4">
                                    <div
                                        className="tf__contact_2_text fade_left"
                                        data-trigerId="contact"
                                    >
                                        <span>
                                            <img
                                                src="svg/send_mail.svg"
                                                alt="contact"
                                                className="img-fluid w-100 svg" />
                                        </span>
                                        <h3>Monday - Sunday</h3>
                                        <p>
                                            Work Email
                                        </p>
                                        <a href="mailto:hardikshali1612@gmail.com"
                                        >hardikshali1612@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="contact_form_2">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Your Name Here" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Subject" />
                                        </div>
                                        <div className="col-lg-12">
                                            <input type="email" placeholder="Email" />
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                rows="5"
                                                placeholder="Your Message Here"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <button type="submit">Submit</button>
                                </form>
                            </div> */}
                        </div>
                    </section>

                    <div className="footer_2_copyright_area mt_120 xs_mt_80">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="tf__footer_copyright">
                                        <p>© Hardik Shali 2023</p>
                                        {/* <ul>
                                            <li>
                                                <a href="#" className="text_hover_animaiton"
                                                >Trams & Condition
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text_hover_animaiton"
                                                >Privacy Policy
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text_hover_animaiton">Sitemap</a>
                                            </li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
