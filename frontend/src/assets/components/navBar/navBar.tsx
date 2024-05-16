import React from 'react'
import IMAGES from '../../../assets/images/images'
interface propes {
    type?: string;
}
import { Link, Outlet, useLocation } from 'react-router-dom';

function navBar({ type }: propes) {
    return (
        <>
            {
                type == "basic" ?
                    <nav className={` navbar navbar-expand-lg navbar-light ${type ? `bg-light` : ''}`} style={{ backgroundColor: "transparent !important" }}>
                        <a href="index.html" className="logo"><img src={IMAGES.logo} /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link to="/profile/main">
                                        <a className="nav-link " href="#">Profile</a>
                                    </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/home">
                                        <a className="nav-link" href="#">Home</a>
                                    </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="forum">
                                        <a className="nav-link" href="#">Forums</a>
                                    </Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <div className="login_menu">
                                    <ul>
                                        <li>

                                        </li>
                                        {/* <li><a href="#"><img src="images/trolly-icon.png"></a></li>
                            <li><a href="#"><img src="images/search-icon.png"></a></li> */}
                                    </ul>
                                </div>
                                <div></div>
                            </form>
                        </div>
                        <div id="main">
                            {/* <span style="font-size:36px;cursor:pointer; color: #fff" onclick="openNav()"><img src="images/toggle-icon.png" style="height: 30px;"></span> */}
                        </div>
                    </nav> : <nav className={` navbar navbar-expand-lg navbar-light ${type ? `bg-light` : ''}`} style={{ backgroundColor: "transparent !important" }}>
                        <a href="index.html" className="logo"><img src={IMAGES.logo} /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#shop">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#events">Events</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signup">
                                        <a className="nav-link" href="#">
                                            Join Community
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <div className="login_menu">
                                    <ul>
                                        <li>
                                            <Link to="/login">
                                                login
                                            </Link>
                                        </li>
                                        {/* <li><a href="#"><img src="images/trolly-icon.png"></a></li>
                            <li><a href="#"><img src="images/search-icon.png"></a></li> */}
                                    </ul>
                                </div>
                                <div></div>
                            </form>
                        </div>
                        <div id="main">
                            {/* <span style="font-size:36px;cursor:pointer; color: #fff" onclick="openNav()"><img src="images/toggle-icon.png" style="height: 30px;"></span> */}
                        </div>
                    </nav>
            }

        </>
    )
}

export default navBar