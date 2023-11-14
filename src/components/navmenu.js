import React from 'react';

const NavMenu = () => {
    const handleLogoClick = () => {
        window.location.reload()
    }
    return (
        <nav className="main_menu_2">
            <span className="menu_2_icon">
                <i className="fa-light fa-bars bar_icon-staggered bar_icon"></i>
                <i className="fa-light fa-xmark close_icon"></i>
            </span>

            <a className="logo_2" href="#" onClick={handleLogoClick}>
                <img src="images/logoNew.png" alt="HARDIK" class="img-fluid w-100" />
            </a>

            <ul id="list-example" className="list-group">
                <li>
                    <a
                        className="list-group-item list-group-item-action text_hover_animaiton"
                        href="#banner"
                    >
                        <div className="list-item-content">
                            <span>
                                <img src="svg/home-2.svg" alt="icon" className="img-fluid w-100 svg" />
                            </span>
                            Home
                        </div>
                    </a>
                </li>
                <li>
                    <a
                        className="list-group-item list-group-item-action text_hover_animaiton"
                        href="#about"
                    >
                        <div className="list-item-content">
                            <span>
                                <img src="svg/clipboard.svg" alt="icon" className="img-fluid w-100 svg" />
                            </span>
                            About Me
                        </div>
                    </a>
                </li>
                <li>
                    <a
                        className="list-group-item list-group-item-action text_hover_animaiton"
                        href="#skills"
                    >
                        <div className="list-item-content">
                            <span>
                                <img src="svg/path.svg" alt="icon" className="img-fluid w-100 svg" />
                            </span>
                            Skills
                        </div>
                    </a>
                </li>
                <li>
                    <a
                        className="list-group-item list-group-item-action text_hover_animaiton"
                        href="#recommendation"
                    >
                        <div className="list-item-content">
                            <span>
                                <img src="svg/quote-down-square.svg" alt="icon" className="img-fluid w-100 svg" />
                            </span>
                            Recommendation
                        </div>
                    </a>
                </li>
                <li>
                    <a
                        className="list-group-item list-group-item-action text_hover_animaiton"
                        href="#contact"
                    >
                        <div className="list-item-content">
                            <span>
                                <img src="svg/user-square.svg" alt="icon" className="img-fluid w-100 svg" />
                            </span>
                            Contact
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavMenu;
