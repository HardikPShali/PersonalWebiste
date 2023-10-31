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
                                            Hi, I'm ZYAN! Creative
                                            <span className="cd-headline rotate-1">
                                                <span className="cd-words-wrapper">
                                                    <b className="is-visible">Designer</b>
                                                    <b>Coder</b>
                                                    <b>Player</b>
                                                </span>
                                            </span>
                                        </h1>
                                        <p>
                                            I'm a passionate UI/UX designer with a mission to create
                                            delightful and intuitive digital experiences. With a strong
                                            foundation in design principles and a keen eye for detail, I
                                            specialize in translating complex ideas into user-friendly
                                            interfaces that captivate and engage.
                                        </p>
                                        <ul>
                                            <li>
                                                <a className="common_btn" href="#"
                                                >Download Cv
                                                    <i className="fa-solid fa-arrow-down-to-line">
                                                    </i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="banner_video_btn play_btn"
                                                    href="https://www.youtube.com/watch?v=B-ytMSuwbf8"
                                                ><i className="fa-sharp fa-solid fa-circle-play"></i> Watch
                                                    the video
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
                                                            Nemo enim ipsam voluptatem quia voluptas sit
                                                            aspernatur aut odit aut fugit sed thisnquia
                                                            consequuntur magni dolores eos qui ratione
                                                            voluptatem sequi nesciunt. Neque porro quisquam est,
                                                            qui dolorem ipsum quia dolor sit amet
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
                                                            Nemo enim ipsam voluptatem quia voluptas sit
                                                            aspernatur aut odit aut fugit sed thisnquia
                                                            consequuntur magni dolores eos qui ratione
                                                            voluptatem sequi nesciunt. Neque porro quisquam est,
                                                            qui dolorem ipsum quia dolor sit amet
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="tf__about_img tf__about_img_2">
                                        <img
                                            src="images/about_img_2.jpg"
                                            alt="ZYAN"
                                            className="img-fluid w-100" />
                                        <div className="tf__about_img_text">
                                            <i className="fa-sharp fa-solid fa-award"></i>
                                            <h4>15+ <span>Years Of Experience</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

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
                    </section>

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
                                                Biography
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
                                            <div className="row">
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
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-profile"
                                            role="tabpanel"
                                            aria-labelledby="pills-profile-tab"
                                            tabindex="0"
                                        >
                                            <div className="row education">
                                                <div className="col-xl-6 col-lg-6">
                                                    <div
                                                        className="tf__single_skill_2 fade_bottom"
                                                        data-trigerId="skills"
                                                    >
                                                        <h3>MBA</h3>
                                                        <h2>University of Dhaka</h2>
                                                        <h4>2009 - 2012</h4>
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
                                                        <h3>BBA</h3>
                                                        <h2>University of Dhaka</h2>
                                                        <h4>2009 - 2012</h4>
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
                                                        <h3>HSC</h3>
                                                        <h2>Govt Bangla College</h2>
                                                        <h4>2009 - 2012</h4>
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
                                                        <h2>Govt Bangla College</h2>
                                                        <h4>2009 - 2012</h4>
                                                        <p>
                                                            Nemo enim ipsam voluptatem quia voluptas sit
                                                            aspernatur aut odit aut fugit sed thisnquia
                                                            consequuntur magni dolores eos qui ratione
                                                            voluptatem sequi nesciunt
                                                        </p>
                                                    </div>
                                                </div>
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
                                                <div className="col-xl-6 col-lg-6">
                                                    <div
                                                        className="tf__single_skill_2 fade_bottom"
                                                        data-trigerId="skills"
                                                    >
                                                        <h3>MBA</h3>
                                                        <h2>University of Dhaka</h2>
                                                        <h4>2009 - 2012</h4>
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
                                                        <h3>BBA</h3>
                                                        <h2>University of Dhaka</h2>
                                                        <h4>2009 - 2012</h4>
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
                                                        <h3>HSC</h3>
                                                        <h2>Govt Bangla College</h2>
                                                        <h4>2009 - 2012</h4>
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
                                                        <h2>Govt Bangla College</h2>
                                                        <h4>2009 - 2012</h4>
                                                        <p>
                                                            Nemo enim ipsam voluptatem quia voluptas sit
                                                            aspernatur aut odit aut fugit sed thisnquia
                                                            consequuntur magni dolores eos qui ratione
                                                            voluptatem sequi nesciunt
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-disabled"
                                            role="tabpanel"
                                            aria-labelledby="pills-disabled-tab"
                                            tabindex="0"
                                        >
                                            <div className="row education">
                                                <div className="col-xl-6 col-lg-6">
                                                    <div
                                                        className="tf__single_skill_2 fade_bottom"
                                                        data-trigerId="skills"
                                                    >
                                                        <h3>MBA</h3>
                                                        <h2>University of Dhaka</h2>
                                                        <h4>2009 - 2012</h4>
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
                                                        <h3>BBA</h3>
                                                        <h2>University of Dhaka</h2>
                                                        <h4>2009 - 2012</h4>
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
                                                        <h3>HSC</h3>
                                                        <h2>Govt Bangla College</h2>
                                                        <h4>2009 - 2012</h4>
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
                                                        <h2>Govt Bangla College</h2>
                                                        <h4>2009 - 2012</h4>
                                                        <p>
                                                            Nemo enim ipsam voluptatem quia voluptas sit
                                                            aspernatur aut odit aut fugit sed thisnquia
                                                            consequuntur magni dolores eos qui ratione
                                                            voluptatem sequi nesciunt
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

                    <section
                        id="portfolio"
                        className="tf__portfolio tf__portfolio_2 mt_120 xs_mt_80"
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-10 col-lg-9 mb_30">
                                    <div className="tf__section_heading">
                                        <h5 className="has-animation">my recent Portfolio</h5>
                                        <h2 className="has-animation">
                                            Elevate your brand to new heights with our portfolio
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
                    </section>

                    <div className="tf__brand mt_120 xs_mt_80">
                        <div className="row">
                            <div className="col-12">
                                <div className="marquee_animi">
                                    <ul>
                                        <li>* PHP</li>
                                        <li>* Pyrhon</li>
                                        <li>* design</li>
                                        <li>* world</li>
                                        <li>* Development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section id="blog" className="tf__blog_2 pt_120 xs_pt_80 pb_120 xs_pb_80">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 m-auto mb_30">
                                    <div className="tf__section_heading">
                                        <h5 className="has-animation">all blog</h5>
                                        <h2 className="has-animation">
                                            Rafting Unique Experiences Inspiring Connections
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row animation">
                                <div className="col-xl-4 col-md-6">
                                    <div className="tf__slingle_blog_2 fade_left" data-trigerId="blog">
                                        <a
                                            href="blog_details.html"
                                            data-cursor="Read <br> More"
                                            className="tf__blog_img_2"
                                        >
                                            <img
                                                src="images/blog/4.jpg"
                                                alt="blog"
                                                className="img-fluid w-100" />
                                            <span>10 June</span>
                                        </a>
                                        <div className="tf__blog_text_2">
                                            <ul>
                                                <li>
                                                    <i className="fa-sharp fa-solid fa-circle-user"></i> By
                                                    admin
                                                </li>
                                                <li>
                                                    <i className="fa-sharp fa-solid fa-comments"></i> Comments
                                                    (05)
                                                </li>
                                            </ul>
                                            <a className="title" href="blog_details.html"
                                            >Where Passion and Purpose Collide
                                            </a>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and types
                                                etting in our company here thisn designers give me more
                                                design here […]
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="tf__slingle_blog_2 fade_left" data-trigerId="blog">
                                        <a
                                            href="blog_details.html"
                                            data-cursor="Read <br> More"
                                            className="tf__blog_img_2"
                                        >
                                            <img
                                                src="images/blog/5.jpg"
                                                alt="blog"
                                                className="img-fluid w-100" />
                                            <span>10 June</span>
                                        </a>
                                        <div className="tf__blog_text_2">
                                            <ul>
                                                <li>
                                                    <i className="fa-sharp fa-solid fa-circle-user"></i> By
                                                    admin
                                                </li>
                                                <li>
                                                    <i className="fa-sharp fa-solid fa-comments"></i> Comments
                                                    (05)
                                                </li>
                                            </ul>
                                            <a className="title" href="blog_details.html"
                                            >Where Passion and Purpose Collide
                                            </a>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and types
                                                etting in our company here thisn designers give me more
                                                design here […]
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="tf__slingle_blog_2 fade_left" data-trigerId="blog">
                                        <a
                                            href="blog_details.html"
                                            data-cursor="Read <br> More"
                                            className="tf__blog_img_2"
                                        >
                                            <img
                                                src="images/blog/6.jpg"
                                                alt="blog"
                                                className="img-fluid w-100" />
                                            <span>10 June</span>
                                        </a>
                                        <div className="tf__blog_text_2">
                                            <ul>
                                                <li>
                                                    <i className="fa-sharp fa-solid fa-circle-user"></i> By
                                                    admin
                                                </li>
                                                <li>
                                                    <i className="fa-sharp fa-solid fa-comments"></i> Comments
                                                    (05)
                                                </li>
                                            </ul>
                                            <a className="title" href="blog_details.html"
                                            >Where Passion and Purpose Collide
                                            </a>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and types
                                                etting in our company here thisn designers give me more
                                                design here […]
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
                                            Loram ipsum eros justo, posuer oborti viverra laor house of
                                            street
                                        </p>
                                        <a href="callto:12345664746846">123-45664-746846</a>
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
                                            Dhaka 102, m eros justo, posuer oborti viverra laor house of
                                            street
                                        </p>
                                        <a href="#">View on map</a>
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
                                            Dhaka 102, m eros justo, posuer oborti viverra laor house of
                                            street
                                        </p>
                                        <a href="mailto:hfavouriteemail@gmail.com"
                                        >hfavouriteemail@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="contact_form_2">
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
                            </div>
                        </div>
                    </section>

                    <div className="footer_2_copyright_area mt_120 xs_mt_80">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="tf__footer_copyright">
                                        <p>© CodeeFly 2023 | All Rights Reserved</p>
                                        <ul>
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
                                        </ul>
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
