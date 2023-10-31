import React from 'react'

const NavMenu = () => {
    return (
        <nav className="main_menu_2">
            <span className="menu_2_icon">
                <i className="fa-light fa-bars bar_icon-staggered bar_icon"></i>
                <i className="fa-light fa-xmark close_icon"></i>
            </span>

            <a className="logo_2" href="index_2.html">
                <img src="images/logo2.png" alt="ZAYAN" className="img-fluid w-100" />
            </a>

            <ul id="list-example" className="list-group">
                <li>
                    <a
                        className="list-group-item list-group-item-action text_hover_animaiton"
                        href="#banner"

                    >
                        <span style={{ marginLeft: '-60px ' }}
                        ><img
                                src="svg/home-2.svg"
                                alt="icon"
                                className="img-fluid w-100 svg" /></span>
                        Home
                    </a>
                </li>
                <li>
                    <a
                        className="list-group-item list-group-item-action text_hover_animaiton"
                        href="#about"
                    >
                        <span style={{ marginLeft: '-29px ' }}
                        ><img
                                src="svg/clipboard.svg"
                                alt="icon"
                                className="img-fluid w-100 svg" />
                        </span>
                        About Me
                    </a>
                </li>
                <li>
                    <a
                        className="list-group-item list-group-item-action text_hover_animaiton"
                        href="#service"
                    >
                        <span style={{ marginLeft: '-48px ' }}
                        ><img
                                src="svg/briefcase.svg"
                                alt="icon"
                                className="img-fluid w-100 svg" /></span>
                        Service
                    </a>
                </li>
                <li>
                    <a
                        className="list-group-item list-group-item-action text_hover_animaiton"
                        href="#skills"
                    >
                        <span style={{ marginLeft: '-60px ' }}
                        ><img src="svg/path.svg" alt="icon" className="img-fluid w-100 svg" /></span>
                        skills
                    </a>
                </li>
                <li>
                    <a
                        className="list-group-item list-group-item-action text_hover_animaiton"
                        href="#portfolio"
                    >
                        <span style={{ marginLeft: '-23px ' }}
                        ><img
                                src="svg/messages-1.svg"
                                alt="icon"
                                className="img-fluid w-100 svg" /></span>
                        portfolio
                    </a>
                </li>
                <li>
                    <a
                        className="list-group-item list-group-item-action text_hover_animaiton"
                        href="#blog"
                    >
                        <span style={{ marginLeft: '-68px ' }}
                        ><img
                                src="svg/quote-down-square.svg"
                                alt="icon"
                                className="img-fluid w-100 svg" /></span>
                        blog
                    </a>
                </li>
                <li>
                    <a
                        className="list-group-item list-group-item-action text_hover_animaiton"
                        href="#contact"
                    >
                        <span style={{ marginLeft: '-36px ' }}
                        ><img
                                src="svg/user-square.svg"
                                alt="icon"
                                className="img-fluid w-100 svg" /></span>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavMenu
