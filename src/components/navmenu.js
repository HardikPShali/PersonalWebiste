import React from 'react';

const NavMenu = () => {
    return (
        <nav className="main_menu_2">
            <span className="menu_2_icon">
                <i className="fa-light fa-bars bar_icon-staggered bar_icon"></i>
                <i className="fa-light fa-xmark close_icon"></i>
            </span>

            <a className="logo_2" href="index_2.html">
                <img src="images/logoNew.png" alt="HARDIK" className="img-fluid w-100" />
            </a>

            <ul id="list-example" className="list-group">
                <li>
                    <a
                        className="list-group-item list-group-item-action text_hover_animaiton"
                        href="#banner"
                    >
                        <span>
                            <img src="svg/home-2.svg" alt="icon" className="img-fluid w-100 svg" />
                        </span>
                        Home
                    </a>
                </li>
                <li>
                    <a
                        className="list-group-item list-group-item-action text_hover_animaiton"
                        href="#about"
                    >
                        <span>
                            <img src="svg/clipboard.svg" alt="icon" className="img-fluid w-100 svg" />
                        </span>
                        About Me
                    </a>
                </li>
                <li>
                    <a
                        className="list-group-item list-group-item-action text_hover_animaiton"
                        href="#skills"
                    >
                        <span>
                            <img src="svg/path.svg" alt="icon" className="img-fluid w-100 svg" />
                        </span>
                        Skills
                    </a>
                </li>
                <li>
                    <a
                        className="list-group-item list-group-item-action text_hover_animaiton"
                        href="#recommendation"
                    >
                        <span>
                            <img src="svg/quote-down-square.svg" alt="icon" className="img-fluid w-100 svg" />
                        </span>
                        Testimonials
                    </a>
                </li>
                <li>
                    <a
                        className="list-group-item list-group-item-action text_hover_animaiton"
                        href="#contact"
                    >
                        <span>
                            <img src="svg/user-square.svg" alt="icon" className="img-fluid w-100 svg" />
                        </span>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavMenu;
